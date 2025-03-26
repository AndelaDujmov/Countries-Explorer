# Countries Explorer

This is a React-based application that allows users to view country information, filter countries based on language and continent, and sort the data. The app fetches country data from the [REST Countries API](https://restcountries.com/).

## Features

- **Dynamic Country List**: Displays a list of countries with detailed information.
- **Filter by Continent and Language**: Allows users to filter countries by continent and language.
- **Sort Data**: Users can sort the country data alphabetically or by population.
- **Country Details on Hover**: Displays more information about a country when hovered over (e.g., currency, capital, languages, and independence status).
- **Responsive Design**: The app works well across various screen sizes.

## Architecture

The application is built using **React.js** and leverages various modern React patterns, such as **Hooks** and **Functional Components**. It also utilizes **Material-UI** for the user interface components.

### Components

- **HomePage**: This is the main page of the application. It contains the filters, country list, and sorting options. It also manages the state of the filters and the fetching of data from the API.
  
- **CountryList**: Displays a table of countries with details such as name, population, region, and more. It handles sorting and rendering the country data in a table format.

- **Header**: Contains the table headers, which allow sorting by different country attributes (name, population, etc.).

- **Filter**: This component provides filters for continent and language. It allows the user to filter countries based on selected criteria. The `Filter` component is reused for both continent and language filters.

- **CountryPopover**: This component shows detailed information about a country (currency, capital, languages, and independence status) when the country is hovered over.

- **useFetch Hook**: A custom hook used for fetching data from the API. It abstracts the fetch logic and handles states like loading, success, and error.

### Data Flow

1. **State Management**: The primary state is managed within the `HomePage` component using `useState`. The state includes the current URL (for fetching data), selected filters (continent and language), and sorting criteria.

2. **Fetching Data**: The `useFetch` custom hook is responsible for fetching the country data from the API. It returns the fetched data and any errors.

3. **Filters and Sorting**: Filters are applied by setting the state of `continentFilter` and `languageFilter`. Once a filter is applied, the data is re-fetched from the API based on the selected criteria. Sorting is handled by setting the `sortBy` and `sortOrder` states.

4. **Popover Information**: When a country is hovered over in the `CountryList`, a popover (`CountryPopover`) displays additional details like currency, capital, languages, and the independence status.

## Technologies

- **React.js**: Frontend JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework used for styling and components.
- **React Hooks**: Used for managing state and lifecycle events (e.g., `useState`, `useEffect`, custom hooks like `useFetch`).

## Folder Structure

This is an overview of the project's folder structure and the purpose of each folder/file.

### `/src`

The `src` directory contains all the source code for the application, including components, hooks, and pages. This is where most of your code will reside.

---

### `/components`

The `components` folder holds the reusable UI components used throughout the application. Components are typically small, isolated units of functionality that can be imported into other parts of your app.

#### `/CountryList`

This subfolder contains components related to the country list and interactions like sorting and displaying country details.

- ***`CountryList.js`***:  
  The main component responsible for displaying a list of countries. It handles rendering countries, sorting, and other related functionality.

- ***`Header.js`***:  
  The table header component, displaying column headers like "Name," "Population," "Capital," etc. It may also contain sorting controls.

- ***`Filter.js`***:  
  A component that allows users to filter countries based on criteria such as continent or language. It interacts with the `HomePage` to filter the displayed countries.

- ***`CountryPopover.js`***:  
  A popover component that shows additional details about a country when hovered or clicked. It includes information like currency, capital, languages, and independence.

##### `/Header`

This folder contains components related to table headers and the display of column names.

- ***`Header.js`***:  
  A header component for the table, including column labels and the ability to sort by specific attributes like name, population, etc.

##### `/Filter`

This folder contains filter-related components that manage how users filter the displayed data.

- ***`Filter.js`***:  
  A generic filter component that enables users to filter the displayed countries based on selected values such as continent or language.

---

#### `/hooks`

The `hooks` directory contains custom React hooks, which provide reusable logic to manage state and side effects in functional components.

- ***`useFetch.js`***:  
  A custom hook that abstracts the process of fetching data from the API. It handles the logic for making API calls and provides the fetched data, loading states, and error handling.

---

#### `/pages`

The `pages` directory contains components that represent full pages or views of the application. These components manage higher-level logic and typically contain multiple components for rendering the content.

- ***`HomePage.js`***:  
  The main page component of the application, which displays the country list and manages the state for filtering and sorting. It uses various components like `Filter`, `CountryList`, and `Header` to render the page's content.

---
