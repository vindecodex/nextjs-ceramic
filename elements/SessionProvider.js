import React, { useState } from 'react';
import NextApp from 'next/app';

import useCeramic from '../lib/ceramic';

export const SessionContext = React.createContext({
				ceramicSelf: '',
				address: '',
				profile: undefined,
				connect: () => {},
				loading: false
});

export default function SessionProvider({ children }) {
				const { connect, ceramicSelf, profile, address, loading } = useCeramic();
				return (
								<SessionContext.Provider value={{ceramicSelf, profile, address, connect, loading}} >
								{ children }
								</SessionContext.Provider>
				)
}
