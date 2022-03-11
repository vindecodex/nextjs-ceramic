import useSWR from 'swr';
import fetcher from '../fetcher';

const useUser = () => {
				return useSWR('/api/user', fetcher);
}

export default useUser;
