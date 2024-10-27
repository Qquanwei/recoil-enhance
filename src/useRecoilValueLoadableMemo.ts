import { useRef } from 'react';
import { useRecoilValueLoadable, Loadable, RecoilValueReadOnly } from 'recoil';

export function useRecoilValueLoadableMemo<T>(
  state: RecoilValueReadOnly<T>
): Loadable<T> {
  const loadable = useRecoilValueLoadable(state);
  const ref = useRef(loadable);

  if (loadable.state === 'hasValue') {
    ref.current = loadable;
  }

  if (loadable.state === 'hasError') return loadable;

  return ref.current;
}
