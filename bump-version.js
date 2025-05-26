// bump-version.js
import inquirer from 'inquirer';
import { execSync } from 'child_process';

async function main() {
  const { bumpType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'bumpType',
      message: 'Select the type of version bump:',
      choices: ['patch', 'minor', 'major']
    }
  ]);

  try {
    // Bump version
    execSync(`npm version ${bumpType} --no-git-tag-version`, { stdio: 'inherit' });

    // 🔄 Commit and push version bump
    execSync('git add package.json package-lock.json', { stdio: 'inherit' });
    execSync('git commit -m "bump version"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });

    // 🛠️ Build and deploy
    execSync('npm run build', { stdio: 'inherit' });
    execSync('npx gh-pages -d dist', { stdio: 'inherit' });

    console.log(`✅ Version bumped (${bumpType}), committed, and deployed to GitHub Pages.`);
  } catch (err) {
    console.error('❌ Error during version bump, git push, or deployment:', err);
  }
}

main();
