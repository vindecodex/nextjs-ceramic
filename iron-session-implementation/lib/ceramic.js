import { Core } from '@self.id/core';
const didWeb = require('@self.id/web');
const { EthereumAuthProvider, SelfID, WebClient } = didWeb;
import { useState, useEffect } from 'react';

const useCeramic = () => {
				const [ ceramicSelf, setCeramicSelf ] = useState(() => {});
				const [ address, setAddress ] = useState('');
				const [ profile, setProfile ] = useState(undefined);
				const [ loading, setLoading ] = useState(false);

				const auth = async () => {
								const [addr] = await window.ethereum.request({ method: 'eth_requestAccounts' });
								const authProvider = new EthereumAuthProvider(window.ethereum, addr)

								const client = new WebClient({ 
												ceramic: 'local',
												connectNetwork: 'testnet-clay',
								});
								
								await client.authenticate(authProvider)

								const selfInstance = new SelfID({ client });
								setCeramicSelf(selfInstance);

				}

				const connect = async() => {
								setLoading(true);
								await auth();
				}

				useEffect( async () => {
								if (!ceramicSelf) return;
								const core = new Core({ ceramic: 'testnet-clay' });
								const profile = await core.get('basicProfile', ceramicSelf.did._id);
								const cryptoAccounts = await core.get('cryptoAccounts', ceramicSelf.did._id);
								setAddress((Object.keys(cryptoAccounts)[0]));
								setProfile({...profile});
								setLoading(false);
				}, [ceramicSelf])

				return {
								auth,
								connect,
								address,
								ceramicSelf,
								profile,
								loading
				}
}

export default useCeramic;
