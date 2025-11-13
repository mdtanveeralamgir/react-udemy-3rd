import {useState} from "react";

export default function SearchableList({items}) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }

    const searchResults = items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div className="searchable-list">
        <input type="search" placeholder="Search" onChange={handleSearch}/>
        <ul>
            {searchResults.map((item, index) => <li key={index}>{item.title}</li>)}
        </ul>
    </div>
}