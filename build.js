const esbuild = require('esbuild');

// Bundling client files
esbuild
  .build({
    entryPoints: ['./client/src/extension.ts'],
    bundle: true,
    outfile: './client/out/extension.js',
    platform: 'node',
    target: 'node14', // Adjust this to the Node.js version used by your extension
    external: ['vscode'],
  })
  .catch(() => process.exit(1));

// Bundling server files
esbuild
  .build({
    entryPoints: [
      './server/src/server.ts',
      './server/src/parser.ts',
      './server/src/definitionInfo.ts',
      './server/src/completionItems/fc.ts',
      './server/src/completionItems/if.ts',
      './server/src/completionItems/spt.ts',
      './server/src/completionItems/te.ts',
    ],
    bundle: true,
    outdir: './server/out/',
    platform: 'node',
    target: 'node14', // Adjust this to the Node.js version used by your extension
    external: ['vscode-languageserver'],
  })
  .catch(() => process.exit(1));
