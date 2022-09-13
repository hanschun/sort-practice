module.exports = {
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,
	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: ['src/**/*.ts'],
	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',
	// A list of reporter names that Jest uses when writing coverage reports
	coverageReporters: ['json', 'text', 'lcov', 'clover', 'text-summary', 'json-summary'],
	// An object that configures minimum threshold enforcement for coverage results
	coverageThreshold: {
		global: {
			branches: 77,
			functions: 92,
			lines: 92,
			statements: 92,
		},
	},
	// Make calling deprecated APIs throw helpful error messages
	errorOnDeprecated: true,
	// An array of file extensions your modules use
	moduleFileExtensions: ['js', 'json', 'ts'],
	// Use this configuration option to add custom reporters to Jest
	reporters: ['default'],
	// Automatically reset mock state between every test
	resetMocks: true,
	// Reset the module registry before running each individual test
	resetModules: false,
	// Automatically restore mock state between every test
	restoreMocks: true,
	// The root directory that Jest should scan for tests and modules within
	rootDir: './',
	roots: ['src'],
	testEnvironment: 'node',
	testMatch: ['**/*.spec.ts'],
	testTimeout: 10000,
	transform: {
		'^.+\\.[t|j]sx?$': 'ts-jest',
	},

	slowTestThreshold: 10,
};
