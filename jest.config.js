
// jest.config.js

module.exports = {
  setupFilesAfterEnv: [
    "@testing-library/jest-dom"
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};
