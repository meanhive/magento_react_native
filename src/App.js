import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider, theme } from './theme';
import Navigator from './navigation';
import NavigationService from './navigation/NavigationService';
import store from './store';
import { initializeApp } from './store/actions';

store.dispatch(initializeApp());

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Navigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </ThemeProvider>
  </StoreProvider>
);

export default App;
