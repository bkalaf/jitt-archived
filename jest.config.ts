import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    coverageDirectory: 'coverage',
    collectCoverage: true,
    displayName: {
        name: 'JITT',
        color: 'blueBright',
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
};
