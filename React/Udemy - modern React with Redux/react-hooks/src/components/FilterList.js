import React, {useEffect, useState} from 'react';

const FilterList = (props) => {

    const [searchFrase, setSearchFrase] = useState("");

    const searchOnChange = (e) => {
        setSearchFrase(e.target.value);
    }

    useEffect(() => {
        console.log(searchFrase)
    }, [searchFrase])

    
    const renderList = props.list.map((item) => {

        return (
            <div key={item.value}>
                <input type="checkbox" />
                <label>{ item.label }</label>
            </div>
        )
    }) 

    return (
        <React.Fragment>
            <h1>Lista</h1>
            <form>
                <input onChange={(e) => {searchOnChange(e)}} type="text" value={searchFrase} placeholder="Szukaj" />
                { renderList }
            </form>
        </React.Fragment>
    )
}

export default FilterList;