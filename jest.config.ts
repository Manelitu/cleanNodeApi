export default {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
