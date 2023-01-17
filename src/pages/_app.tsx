import type { AppProps } from 'next/app';
import Theme from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    <Theme/>
    </>
  )
}

export default MyApp
