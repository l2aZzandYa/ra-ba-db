const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <input type="search" placeholder="Filter by name"
                onChange={(e) => props.set('name', e.target.value)}
                value={props.get('name')} />
        </div>
    )
}

export default SearchBar;