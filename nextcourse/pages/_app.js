import { Provider } from 'react-redux';
import Layout from '../src/components/layout/Layout'
import configureStore from '../src/store'
import storage from '../src/utils/storage';
import '../src/config/i18next-config';

import '../styles/globals.css'

const accessToken = storage.get('auth');

const preState = {
  preloadedState: {
    auth: {
      isLogged: false,
      username: null,
      favs: [],
      loaded: false,
    },
    ui: {
      loading: false,
      error: null,
    },
    // history,
  },
};

if (!!accessToken) {
  loginWithToken(accessToken).then((data) => {
    if (!data.displayName) {
      storage.remove('auth');
    } else {
      configureClient({ accessToken });
      preState.preloadedState.auth.isLogged = true;
      preState.preloadedState.auth.username = data.displayName;
      preState.preloadedState.auth.favs = data.favs;
    }
  });
}

const store = configureStore(preState);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
