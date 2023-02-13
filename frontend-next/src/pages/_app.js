import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <h1>nav</h1>
      <Component {...pageProps} />
      <h1>Footer</h1>
    </>
  )
}
