## wallet-provider

a offcial wallet provider for [DexMask](https://github.com/dex-zswap/dex-wallet) wallet


## Useage

- install connector package

```sheel
  yarn add dex-wallet-connector
```

- use connector in component

```jsx
import React, { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import DexWalletConnector from 'dex-wallet-connector';

const dexWalletConnector = new DexWalletConnector({
  supportedChainIds: [
    '0x1'
  ]
});

function ConnectWalletComponent() {
  const { activate, deactivate } = useWeb3React();

  const connect = useCallback(() => {
    activate(dexWalletConnector, (erorr) => {
      //  do sth else
    });
  }, [activate]);

  const disConnect = useCallback(() => {
    deactivate();
    //  do sth else
  }, [deactivate]);

  return (
    <>
      {/*  component layout */}
    </>
  )
}

```

