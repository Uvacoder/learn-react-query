import axios from 'axios';
import { useQuery } from 'react-query';

const usePeople = () => {
    return useQuery('people', async () => {
        const { data } = await axios.get('http://swapi.dev/api/people/');
        return data;
    });
};

export default usePeople;
