// This component is the header of the table, it contains the column names and the sort functionality

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