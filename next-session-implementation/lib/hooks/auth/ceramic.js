import { Core } from '@self.id/core';
const didWeb = require('@self.id/web');
const { EthereumAuthProvider, SelfID, WebClient } = didWeb;
import { useState, useEffect } from 'react';

const useCeramic = () => {
				const [ ceramicSelf, setCeramicSelf ] = useState(() => {});
				const [ address, setAddress ] = useState('');
				const [ profile, setProfile ] = useState(undefined);
				const [ status, setStatus ] = useState('connect');

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
								setStatus('connecting');
								await auth();
				}

				useEffect( async () => {
								if (!ceramicSelf) return;
								const core = new Core({ ceramic: 'testnet-clay' });
								const _profile = await core.get('basicProfile', ceramicSelf.did._id);
								const cryptoAccounts = await core.get('cryptoAccounts', ceramicSelf.did._id);
								const _address = Object.keys(cryptoAccounts)[0];
								setProfile({..._profile});
								setAddress(_address);
								setStatus('connected');
								await fetch('/api/ceramic', {
												method: 'POST',
												headers: { 'Content-Type': 'application/json' },
												body: JSON.stringify({ 
																user: { ..._profile, _address },
												})
								})
				}, [ceramicSelf])

				return {
								connect,
								profile,
								status
				}
}

export default useCeramic;
