import React, { useState } from "react";
import "./Search.scss"

export default function Search(props) {
    let [search, setSearch] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        props.setCity(search);
    }

    function updateSearch(event) {
        setSearch(event.target.value);
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <h4 className="margin">Search City:</h4>
                <input type="search" onChange={updateSearch} />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}
