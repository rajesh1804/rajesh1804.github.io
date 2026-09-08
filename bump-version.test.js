import test from 'node:test';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'url';

import { buildAuthenticatedRemoteUrl, ensureGitAuth, isDirectRun } from './bump-version.js';

test('isDirectRun matches the current file entry point URL', () => {
  assert.equal(isDirectRun(new URL('./bump-version.js', import.meta.url).pathname), false);
  assert.equal(isDirectRun(new URL('./bump-version.js', import.meta.url).pathname.replace(/\\/g, '/')), false);
  assert.equal(isDirectRun(pathToFileURL(new URL('./bump-version.js', import.meta.url).pathname).href), true);
});

test('buildAuthenticatedRemoteUrl adds GitHub token for HTTPS remotes', () => {
  const result = buildAuthenticatedRemoteUrl(
    'https://github.com/rajesh1804/rajesh1804.github.io.git',
    'test-token'
  );

  assert.equal(
    result,
    'https://x-access-token:test-token@github.com/rajesh1804/rajesh1804.github.io.git'
  );
});

test('ensureGitAuth throws a helpful message when HTTPS remote is used without a token', () => {
  assert.throws(
    () => ensureGitAuth('https://github.com/rajesh1804/rajesh1804.github.io.git', ''),
    /GITHUB_TOKEN|SSH/i
  );
});
