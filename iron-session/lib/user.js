import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())
const useUser = () => {
				const { data, error } = useSWR('/api/user', fetcher)
				if (error) return false
				return data;
}

export default useUser;
