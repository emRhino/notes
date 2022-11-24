import React, {useEffect, useState, useRef} from 'react';

const FilterList = (props) => {

    const [searchFrase, setSearchFrase] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    const listRef = useRef();

    const searchOnChange = (e) => {
        setSearchFrase(e.target.value);
    }

    useEffect(() => {
        console.log(searchFrase)
    }, [searchFrase])

    const bla = (e) => {
        console.log(e);
    }
    
    const renderList = props.list.filter((item) => {
        const itemLowerCase = item.label.toLowerCase();
        return itemLowerCase.includes(searchFrase.toLowerCase())
    }).map((item) => {
        return (
            <div key={item.value}>
                <input ref={listRef} onChange={bla} type="checkbox" />
                <label>{ item.label }</label>
            </div>
        )
    });

    

    return (
        <React.Fragment>
            <h1>Lista</h1>
            <form>
                <input onChange={(e) => {searchOnChange(e)}} type="text" value={searchFrase} placeholder="Szukaj" />
                { renderList }
            </form>
            <h2>Wybrane marki</h2>
            <ul>
                { selectedItems }
            </ul>
        </React.Fragment>
    )
}

export default FilterList;