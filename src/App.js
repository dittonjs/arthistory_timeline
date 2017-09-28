import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure_store';
import Timeline from './components/timeline';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timeline />
      </Provider>
    );
  }
}

export default App;
