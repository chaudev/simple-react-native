import React from 'react';

import {Provider as StoreProvider} from 'react-redux';
import RootNavigator from '~/navigators/rootNavigator';
import store from '~/store';

// concac

const App = () => {
  return (
    <StoreProvider store={store}>
      <RootNavigator />
    </StoreProvider>
  );
};

export default App;
