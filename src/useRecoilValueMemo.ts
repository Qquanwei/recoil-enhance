import { useRef } from 'react';
import { useRecoilValueLoadable, RecoilState } from 'recoil';

export function useRecoilValueMemo<T>(state: RecoilState<T>) {
  const loadable = useRecoilValueLoadable(state);
  const ref = useRef<T | null>(null);

  if (loadable.state === 'hasValue') {
    ref.current = loadable.contents;
  }

  if (ref.current == null && loadable.state === 'loading')
    throw loadable.contents;

  if (loadable.state === 'hasError') {
    throw loadable.contents;
  }

  return ref.current;
}
