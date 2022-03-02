import '../styles/globals.css';
import Header from '../elements/Header';
import SessionProvider from '../elements/SessionProvider';

export default function MyApp({ Component, pageProps }) {
  return (
					<SessionProvider>
					<Header />
									<Component {...pageProps} />
					</SessionProvider>
	)
}
