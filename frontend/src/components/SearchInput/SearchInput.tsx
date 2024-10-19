import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useFilterConversation } from "../../hooks/useFilterConversation";

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const { filterConversation } = useFilterConversation();
    const changeHandler = (e) => {
        setSearch(e.target.value);
        filterConversation(search.toLowerCase());
    }
    return (
        <form className="searchArea">
            <input type="text" name="search" value={search} onChange={changeHandler} placeholder="Search" className="inputForm"/>
            <button type="submit" className="searchButton"><IoSearchSharp className="icon"/></button>
        </form>
    )
}

export default SearchInput;