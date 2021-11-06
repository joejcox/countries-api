import { useEffect, useState } from 'react'
import CountryCard from '../CountryCard'
import { countries } from './CountriesList.module.css'

const CountriesList = () => {
    const [countriesData, setCountriesData] = useState(false)

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then((res) => res.json())
            .then((data) => setCountriesData(data))
    }, [])

    console.log(countriesData)

    const showCountries = () =>
        countriesData.map(({ name, alpha3Code }) => (
            <CountryCard name={name} key={alpha3Code} />
        ))

    return (
        <section className={`${countries} columns is-multiline`}>
            {countriesData.length > 0
                ? showCountries()
                : 'No Countries To Display'}
        </section>
    )
}

export default CountriesList
