import useSWR from 'swr';


const useUser = () => {
				const {data, mutate} = useSWR('/api/connect', (url) => fetch(url))
				return data;
}

export default useUser;
