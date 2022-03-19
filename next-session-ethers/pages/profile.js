import { withSession } from '../lib/server/withSession';

export default function Profile({ user }) {
  return (
	  <div>
	  	<h1>{ user?.address }</h1>
	  </div>
  )
}

export const getServerSideProps = withSession(({ req, res }) => {
	if (!req?.session?.address) {
		res.setHeader('location', '/login');
		res.statusCode = 302;
		res.end();
	}
	return {
		props: {
			user: { 
				address: req?.session?.address,
			},
		},
	}
})
