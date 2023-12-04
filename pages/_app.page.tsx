import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <h1 id="app-ran-repro">hi from _app</h1>
    <Component {...pageProps} />
  </>
}
