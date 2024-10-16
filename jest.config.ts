// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    preset: 'ts-jest',  // Use ts-jest for TypeScript support
    testEnvironment: 'jsdom', // or 'jsdom' for frontend testing
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/__tests__/**/*.test.tsx', '**/?(*.)+(spec|test).ts'],
    clearMocks: true, // Automatically clear mock calls and instances between tests
    verbose: true,    // Show detailed test results
    transform: {".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"}
};
export default config;
