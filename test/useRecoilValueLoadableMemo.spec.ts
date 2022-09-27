import { useRecoilValueLoadableMemo } from '../src';

describe('useRecoilValueLoadableMemo', () => {
  it('should be a function', () => {
    expect(useRecoilValueLoadableMemo).toEqual(expect.any(Function));
  });
});
