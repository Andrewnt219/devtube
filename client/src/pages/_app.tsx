import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider as ScProvider } from 'styled-components';
import {
  StylesProvider,
  ThemeProvider as MuiProvider,
} from '@material-ui/core/styles';
import { defaultTheme } from '../theme/default.theme';
import { wrapper } from '../app/store';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { GlobalStyle } from '../theme/GlobalStyle.theme';
import AppBar from '../components/navigation/AppBar';
import { MainLayout } from '../components/layout/MainLayout';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <StylesProvider injectFirst>
      <MuiProvider theme={defaultTheme}>
        <ScProvider theme={defaultTheme}>
          <GlobalStyle />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ScProvider>
      </MuiProvider>
    </StylesProvider>
  );
}

export default wrapper.withRedux(App);