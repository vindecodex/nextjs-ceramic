import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from './fetcher';

const useUser = () => {
				const { data, error } = useSWR('/api/user', fetcher);
				const [ user, setUser ] = useState('');
				useEffect(() => {
								setUser(data);
				}, [data]);

				return {
								user,
								error
				}
}

export default useUser;
