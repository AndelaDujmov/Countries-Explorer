/**
 * Header Component
 * 
 * This component renders the table header with sortable column names.
 * Clicking on a column header toggles sorting order between ascending and descending.
 * 
 * @param {string} sortOrder - Current sorting order ('asc' or 'desc').
 * @param {Function} setSortOrder - Function to update sorting order.
 * @param {string} sortBy - Column currently used for sorting.
 * @param {Function} setSortBy - Function to update the sorting column.
 * 
 * @returns {JSX.Element} - Table header with sorting functionality.
 * 
 * @example
 * <Header 
 *   sortOrder="asc" 
 *   setSortOrder={setSortOrder} 
 *   sortBy="name" 
 *   setSortBy={setSortBy} 
 * />
 */

const Header = ({ sortOrder, setSortOrder, sortBy, setSortBy }) => {
   
    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const getSortIndicator = (column) => {
        return sortBy === column ? (sortOrder === 'asc' ? ' ▲' : ' ▼') : '';
    };

    return (
        <thead>
            <tr>
                <th>Flag</th>
                <th onClick={() => handleSort('name')} style={{ cursor: "pointer" }}>
                    Name{getSortIndicator('name')}
                </th>
                <th onClick={() => handleSort('population')} style={{ cursor: "pointer" }}>
                    Population{getSortIndicator('population')}
                </th>
                <th onClick={() => handleSort('area')} style={{ cursor: "pointer" }}>
                    Area{getSortIndicator('area')}
                </th>
                <th onClick={() => handleSort('continent')} style={{ cursor: "pointer" }}>
                    Continent{getSortIndicator('continent')}
                </th>
            </tr>
        </thead>
    );
};

export default Header;
