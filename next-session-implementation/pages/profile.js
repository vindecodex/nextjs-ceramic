import { getSession } from  '../middleware/session';

export default function Profile({ user }) {
  return (
					<>
								<h1>Profile: { user.name }</h1>
								<h1>Twitter: { user.twitter }</h1>
								<h1>Address: { user._address }</h1>
					</>
  )
}

export async function getServerSideProps({ req, res }) {
				const session = await getSession(req, res);
				let user = session?.user;
				if (!session.user) {
								res.setHeader('location', '/');
								res.statusCode = 302;
								res.end();
								user =  null;
				}
				return {
								props: {
												user
								}
				}
}
