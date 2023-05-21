import React, { useState } from "react";

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={updateSearch} />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}
