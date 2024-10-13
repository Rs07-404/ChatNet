import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className="searchArea">
            <input type="text" placeholder="Search" className="inputForm"/>
            <button type="submit" className="searchButton"><IoSearchSharp className="icon"/></button>
        </form>
    )
}

export default SearchInput;