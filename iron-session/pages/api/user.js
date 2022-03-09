import { withIronSessionApiRoute } from 'iron-session/next';
import { ironSessionOpt } from '../../lib/iron-session-opt';

export default  withIronSessionApiRoute(handler, ironSessionOpt);

async function handler(req, res) {
				try {
								if (req.session.user) {
												res.json({
																...req.session.user
												});
								} else {
												res.json({});
								}
				} catch (e) {
								console.log(e);
								res.status(500).json({ messsage: 'API Error: ' + e });
				}
}
