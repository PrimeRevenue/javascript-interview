module.exports = {
    extends: '@istanbuljs/nyc-config-typescript',
    all: true,
    'check-coverage': true,
    sourceMap: true,
    instrument: true,
    reporter: ['text-summary'],
    include: ['src/**'],
    require: ['ts-node/register'],
    exclude: [
        'dist/**',
        '**/*.d.ts',
        'coverage/**',
        'tests/**',
        '**/*{.,-}{test,spec}.ts',
        '**/node_modules/**'
    ],
    branches: 0,
    lines: 0,
    functions: 0,
    statements: 0
};
