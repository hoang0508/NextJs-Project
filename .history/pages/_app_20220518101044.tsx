import "../styles/globals.css";
import type { AppProps } from "next/app";
import { hot } from "react-hot-loader/root";
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
  // const persistor = persistStore(store);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <Snackbar maxSnack={99}>
          <Notifier />
          <GlobalLoader />
        </Snackbar> */}
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

// export default MyApp;

export default process.env.NODE_ENV === "development" ? hot(MyApp) : MyApp;
