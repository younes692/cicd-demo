export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.{js,jsx}'],
  setupFilesAfterEnv: ['./src/__tests__/setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/__tests__/**'],
};
