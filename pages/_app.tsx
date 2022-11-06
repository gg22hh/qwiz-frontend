import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import '../firebase';
import { store } from '../store';

const theme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#42a5f5',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
