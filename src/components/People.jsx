import usePeople from '../hooks/usePeople';
import Person from './Person';

const People = () => {
    const { data, status } = usePeople();
    console.log('🚀 ~ People ~ data', data);

    return (
        <div>
            <h2>People</h2>

            {status === 'loading' ? (
                'Loading...'
            ) : status === 'error' ? (
                <span>Error</span>
            ) : (
                <div>
                    {data.results.map((person) => (
                        <Person key={person.name} person={person} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default People;
