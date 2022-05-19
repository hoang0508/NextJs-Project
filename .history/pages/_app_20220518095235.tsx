import "../styles/globals.css";
import type { AppProps } from "next/app";

import { store } from "../src/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";

import { theme } from "../src/static/theme";
import { PersistGate } from "redux-persist/integration/react";

import Notifier from "@containers/Notifier/Notifier";
import GlobalLoader from "@containers/GlobalLoader/GlobalLoader";
import Snackbar from "@components/Snackbar/Snackbar";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Snackbar maxSnack={99}>
            <Notifier />
            <GlobalLoader />
            </Snackbar>
            </ThemeProvider>
          </PersistGate> */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
