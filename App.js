import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabStackNavigator from './src/TabStack/TabsStackNavigator';
import {Provider} from 'react-redux';

import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <TabStackNavigator />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default App;
