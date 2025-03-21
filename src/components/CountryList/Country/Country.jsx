const Country = ({  country }) => {
    return(
        <div>
            <h2>{country.name}</h2>
            <p>{country.flag}</p>
        </div>
    )
}

export default Country