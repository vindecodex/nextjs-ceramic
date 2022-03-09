import '../styles/globals.css';
import Header from '../elements/Header';

export default function MyApp({ Component, pageProps }) {
  return (
					<>
					<Header />
									<Component {...pageProps} />
					</>
	)
}
