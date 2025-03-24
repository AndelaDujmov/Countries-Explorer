/**
 * 
 * @param {*} param0 
 * @returns 
 * 
 * Component that represents table header. Takes sort by and sort order parameters. Implements logic of
 */

const Header = ({ sortOrder, setSortOrder, sortBy, setSortBy }) => {
    const handleSort = (column) => {
        setSortOrder(sortOrder === 'asc' & sortBy === column ? 'desc' : 'asc')
        setSortBy(column)
    }

    return(
        <thead>
            <tr>
                <th onClick={() => handleSort('name')} style={{cursor: "pointer"}}>Name</th>
                <th>Flag</th>
                <th onClick={() => handleSort('population')} style={{cursor: "pointer"}}>Population</th>
                <th onClick={() => handleSort('continent')} style={{cursor: "pointer"}}>Continent</th>
            </tr>
        </thead>
    )
    
}

export default Header