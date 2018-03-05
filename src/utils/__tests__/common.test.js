import { helloWorld } from '../common';

describe('Common Utils', () => {
  describe('helloWorld', () => {
    test('basic behavior', () => {
      expect(helloWorld()).toBe('Hello, world!');
    });
  });
});
