// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironSessionOpt } from '../../lib/iron-session-opt';

export default  withIronSessionApiRoute(handler, ironSessionOpt);

async function handler(req, res) {
				try {
								if (req.session) res.status(200).json(req.session);
								const { user } = await req.body;
								req.session.user =  user;
								await req.session.save();
								res.status(200).json(req.session)
				} catch (e) {
								console.log(e);
								res.status(500).json({ messsage: 'API Error: ' + e });
				}
}
