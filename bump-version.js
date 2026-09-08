// bump-version.js
import { execSync } from 'child_process';

export function isDirectRun(entryPointArg = process.argv[1]) {
  if (!entryPointArg) {
    return false;
  }

  const normalized = entryPointArg.replace(/\\/g, '/');
  return normalized.toLowerCase().endsWith('/bump-version.js');
}

export function buildAuthenticatedRemoteUrl(remoteUrl, token) {
  if (!token) {
    return remoteUrl;
  }

  const url = new URL(remoteUrl);
  url.username = 'x-access-token';
  url.password = token;
  return url.toString();
}

export function ensureGitAuth(remoteUrl, token = process.env.GITHUB_TOKEN) {
  if (!remoteUrl) {
    throw new Error('No git remote configured for origin.');
  }

  if (remoteUrl.startsWith('https://github.com/')) {
    if (!token) {
      throw new Error(
        'GitHub HTTPS remote requires authentication. Set GITHUB_TOKEN or switch origin to SSH via: git remote set-url origin git@github.com:rajesh1804/rajesh1804.github.io.git'
      );
    }

    return buildAuthenticatedRemoteUrl(remoteUrl, token);
  }

  return remoteUrl;
}

function getBumpType() {
  const arg = process.argv[2];
  const allowed = new Set(['patch', 'minor', 'major']);

  if (arg && allowed.has(arg)) {
    return arg;
  }

  if (arg && !allowed.has(arg)) {
    console.warn(`Unknown bump type "${arg}". Defaulting to "patch".`);
  }

  return 'patch';
}

async function main() {
  const bumpType = getBumpType();

  try {
    const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
    const token = process.env.GITHUB_TOKEN;
    const authenticatedRemote = ensureGitAuth(remoteUrl, token);

    console.log(`Using bump type: ${bumpType}`);
    console.log(`Deploy target: gh-pages branch`);

    // Bump version
    execSync(`npm version ${bumpType} --no-git-tag-version`, { stdio: 'inherit' });

    // Commit and push the version bump
    execSync('git add package.json package-lock.json', { stdio: 'inherit' });
    execSync('git commit -m "bump version"', { stdio: 'inherit' });

    if (authenticatedRemote !== remoteUrl) {
      execSync(`git push ${authenticatedRemote} HEAD`, { stdio: 'inherit' });
    } else {
      execSync('git push origin HEAD', { stdio: 'inherit' });
    }

    // Build the site and push the dist folder to the gh-pages branch
    execSync('npm run build', { stdio: 'inherit' });
    execSync('npx gh-pages -d dist -b gh-pages', { stdio: 'inherit' });

    console.log(`✅ Version bumped (${bumpType}), committed, and deployed to the gh-pages branch.`);
  } catch (err) {
    console.error('❌ Error during version bump, git push, or deployment:', err.message || err);
    process.exitCode = 1;
  }
}

if (isDirectRun()) {
  main();
}
