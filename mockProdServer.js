import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userMock from './src/mock/user';
import homeMock from './src/mock/home';
export function setupProdMockServer() {
  createProdMockServer([...userMock, ...homeMock]);
}
