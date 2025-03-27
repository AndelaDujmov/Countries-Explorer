# Countries Explorer

This is a React-based application that allows users to view country information, filter countries based on language and continent, and sort the data. The app fetches country data from the [REST Countries API](https://restcountries.com/).
The application is built using **React.js** and leverages various modern React patterns, such as **Hooks** and **Functional Components**. It also utilizes **Material-UI** for the user interface components.

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Folder Structure](#folder-structure)
4. [Installation](#installation)
5. [Resources](#resources)

## Features

- **Dynamic Country List**: Displays a list of countries with detailed information.
- **Filter by Continent and Language**: Allows users to filter countries by continent and language.
- **Sort Data**: Users can sort the country data alphabetically or by population.
- **Country Details on Hover**: Displays more information about a country when hovered over (e.g., currency, capital, languages, and independence status).
- **Responsive Design**: The app works well across various screen sizes.

## Technologies

- **JavaScript**
- **React.js**
- **Tailwind CSS**
- **Docker**

## Folder Structure

This is an overview of the project's folder structure and the purpose of each folder/file.

### `/src`

The `src` directory contains all the source code for the application, including components, hooks, and pages. This is where most of the code resides.

---

#### `/components`

The `components` folder holds the reusable UI components used throughout the application.

---

##### `/CountryList`

This subfolder contains components related to the country list and interactions like sorting and displaying country details.

###### `/Header`

This folder contains components related to table headers and the display of column names.

###### `/Filter`

This folder contains filter-related components that manage how users filter the displayed data.

---

#### `/hooks`

The `hooks` directory contains custom React hook, which provide reusable logic to manage state and side effects in functional components.

#### `/pages`

The `pages` directory contains components that represent full pages or views of the application.

#### `/utils`

The utils directory contains reusable utility functions and data that support various parts of the application.

---

## Installation

### **1. Clone the Repository**

```bash
git clone https://github.com/AndelaDujmov/Countries-Explorer
```

## 2. Running the Application

### Using Docker

#### For Windows/Linux (via Docker)

Make sure you have Docker installed on your machine. You can follow the installation guide for Docker on [Docker's official website](https://docs.docker.com/get-docker/).

1. Build the Docker image:

    ``` bash
   docker build -t countries-explorer .
   ```

2. Run the Docker container:
     ``` bash
   `docker run -p 3000:3000 countries-explorer
   ```

This will run the application on `http://localhost:3000` in your web browser.

#### For Linux Users: Using Shell Script

If you're on Linux, you can use a shell script to automate the installation process.

1. Navigate to the project folder.

2. Run the installation script:

   `./build.sh`

The `build.sh` script will do the following:
- Build the Docker image.
- Run the Docker container for you.
- Delete any previous Docker images


## Resources

- https://tailwindcss.com/docs/responsive-design
- https://medium.com/@sergeyleschev/react-custom-hook-usefetch-8b310c5d1b7e
- https://api.reactrouter.com/v7/functions/react_router.useNavigate.html
- https://dev.to/itswillt/folder-structures-in-react-projects-3dp8
- https://alitoshmatov.medium.com/navigation-in-react-js-or-useparams-usehistory-uselocation-hooks-part-2-4158409d748d
---