import '../styles/globals.css';
import Header from '../elements/vitals/Header';
import DataProvider from '../elements/provider/DataProvider';

export default function MyApp({ Component, pageProps }) {
  return (
					<DataProvider>
					<Header />
									<Component {...pageProps} />
					</DataProvider>
	)
}
