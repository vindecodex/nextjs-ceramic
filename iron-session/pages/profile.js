import { withIronSessionSsr } from 'iron-session/next';
import { ironSessionOpt } from '../lib/iron-session-opt';

export default function Profile({user}) {
  return (
					<>
									<h1>Profile</h1>
									<p><strong>Name:</strong> { user.name }</p>
									<p><strong>Bio:</strong> { user.bio }</p>
									<p><strong>Twitter:</strong> { user.twitter }</p>
					</>
  )
}

export const getServerSideProps = withIronSessionSsr(async function getServerSideProps({ req, res }) {
				if (!req.session?.user) {
								res.setHeader('location', '/');
								res.statusCode = 302;
								res.end();
				}
				return {
								props: {
												user: req.session.user
								}
				}
}, ironSessionOpt);
