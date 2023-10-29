import React from "react";
import classes from "./Search.module.scss"

const Search = ({searchTerm, setSearchTerm}) => {
        return (
            <div className={classes['search_form']}>
                <label htmlFor="search">Search:</label>
                <input
                    placeholder="Search by title"
                    name="search"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e?.target?.value)}
                />
            </div>
        )
}
export default Search;