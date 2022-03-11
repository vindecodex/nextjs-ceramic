import React, { useEffect, useState } from 'react';
import useUser from '../../lib/hooks/user/user';

export const DataContext = React.createContext({
				user: null,
				mutateUser: null,
});

export default function DataProvider({ children }) {
				const { data: _user, isValidating } = useUser();
				const [ user, setUser ] = useState(null);

				useEffect(() => {
								if (isValidating) return;
								if (_user.user) setUser(_user.user);
				}, [_user]);
				return (
								<DataContext.Provider value={{ user, setUser }} >
								{ children }
								</DataContext.Provider>
				)
}
