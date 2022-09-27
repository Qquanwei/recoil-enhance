import { useRecoilValueMemo } from '../src';

describe('useRecoilValueMemo', () => {
  it('should be a function', () => {
    expect(useRecoilValueMemo).toBe(expect.any(Function));
  });
});
