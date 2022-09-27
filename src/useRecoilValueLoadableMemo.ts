import { useRef } from 'react';
import { useRecoilValueLoadable, RecoilState } from 'recoil';

export function useRecoilValueLoadableMemo<T>(state: RecoilState<T>) {
  const loadable = useRecoilValueLoadable(state);
  const ref = useRef(loadable);

  if (loadable.state === 'hasValue') {
    ref.current = loadable;
  }

  if (loadable.state === 'hasError') return loadable;

  return ref.current;
}
