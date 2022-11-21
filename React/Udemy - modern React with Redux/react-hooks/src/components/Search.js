import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('lego');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    const resultsRender = results.map((result) => {
        return (
            <div key={result.pageid}>
                <h3>{result.title}</h3>
                <p>{result.snippet}</p>
            </div>
        )
    })

    useEffect(() => {
        const delay = setTimeout(() => {
            if (term.length > 2) {
                setDebouncedTerm(term);
            }
        }, 500);

        return () => {
            clearTimeout(delay)
        }

    }, [term])

    useEffect(() => {
        const req = async () => {
            
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    format: 'json',
                    origin: '*',
                    list: 'search',
                    srsearch: debouncedTerm
                }
            });

            setResults(data.query.search);
        }

        req();
        
    }, [debouncedTerm]);

    return (
        <div>
            <input onChange={ (e) => { setTerm(e.target.value) } } value={term} />
            <div>{ resultsRender }</div>
        </div>
    )
}

export default Search;