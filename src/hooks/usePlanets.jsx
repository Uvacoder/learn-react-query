import axios from 'axios';
import { useQuery } from 'react-query';

const usePlanets = () => {
    return useQuery(
        'planets',
        async () => {
            const { data } = await axios.get('http://swapi.dev/api/planets/');
            return data;
        },
        {
            staleTime: 0,
            onSuccess: () => console.log('data fetched'),
        }
    );
};

export default usePlanets;
