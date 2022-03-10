export const ncOption = {
				onError: (err, req, res, next) => {
								res.status(500).end('Something went wrong');
								next();
				}
}
