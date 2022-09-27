## Install

```bash
npm install recoil-enhance
```

## Usage

```diff
import { useRecoilValueMemo, useRecoilValueLoadableMemo } from 'recoil-enhance';

function App() {

- const user = useRecoilValue(userSelector);
+ const user = useRecoilValueMemo(userSelector);


- const userLoadable = useRecoilLoadable(userSelector);
+ const userLoadable = useRecoilLoadableMemo(userSelector);
}
```

## API

### useRecoilValueMemo(recoilState)

like `useRecoilValue`, but will not loading when refresh selector.

### useRecoilValueLoadableMemo

like `useRecoilValueLoadable`, but `loadable.content` always hold latest value.
