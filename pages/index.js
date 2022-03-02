import { withIronSessionSsr } from 'iron-session/next';
import { ironSessionOpt } from '../lib/iron-session-opt';

export default function Home() {
  return (
					<h1>Home</h1>
  )
}

export const getServerSideProps = withIronSessionSsr(function({ req, res }) {
				console.log(req.session, 'index');
				return {
								props: {
												user: {}
								}
				}
}, ironSessionOpt);
