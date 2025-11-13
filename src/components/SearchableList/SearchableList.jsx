import {useState} from "react";

export default function SearchableList({items, itemKeyFunc, children}) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }

    const searchResults = items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div className="searchable-list">
        <input type="search" placeholder="Search" onChange={handleSearch}/>
        <ul>
            {searchResults.map((item) => <li key={itemKeyFunc(item)}>{children(item)}</li>)}
        </ul>
    </div>
}