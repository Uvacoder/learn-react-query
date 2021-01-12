import { useQueryClient } from 'react-query';
import usePlanets from '../hooks/usePlanets';
import Planet from './Planet';

const Planets = () => {
    const queryClient = useQueryClient();
    const { data, status } = usePlanets();

    return (
        <div>
            <h2>Planet</h2>
            {/* <p>{status}</p> */}

            {status === 'loading' && <div>Loading data ...</div>}
            {status === 'error' && <div>Error fetching data</div>}
            {status === 'success' && (
                <div>
                    {data.results.map((planet) => (
                        <Planet key={planet.name} planet={planet} />
                    ))}
                    <hr />
                    {queryClient.getQueryData('people')?.results[0].name}
                </div>
            )}
        </div>
    );
};

export default Planets;
