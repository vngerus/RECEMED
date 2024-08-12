module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',  // Asegúrate de que esto esté correctamente configurado
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
