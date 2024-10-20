import { useState } from "react";
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
        </form>
    )
}

export default SearchInput;