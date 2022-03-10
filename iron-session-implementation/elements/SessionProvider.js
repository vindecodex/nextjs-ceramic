import React, { useEffect } from 'react';
import useCeramic from '../lib/ceramic';
import useUser from '../lib/user';

export const SessionContext = React.createContext({
				ceramicSelf: '',
				address: '',
				profile: undefined,
				connect: () => {},
				auth: () => {},
				loading: false
});

export default function SessionProvider({ children }) {
				const { auth, connect, ceramicSelf, profile, address, loading } = useCeramic();
				const user = useUser();
				useEffect(() => {
								if (!ceramicSelf && user) {
												auth();
								}
				}, [user])
				return (
								<SessionContext.Provider value={{ceramicSelf, profile, address, connect, auth, loading}} >
								{ children }
								</SessionContext.Provider>
				)
}
