import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import CountryCard from '../CountryCard'
import { countries } from './CountriesList.module.css'

const CountriesList = ({ searchValue, regionValue }) => {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(true)
    const [countriesData, setCountriesData] = useState([])
    const [title, setTitle] = useState('Showing all countries')
    const [helmetTitle, setHelmetTitle] = useState(
        'Countries API | Showing all countries'
    )

    useEffect(() => {
        const getCountries = async () => {
            let res = await fetch('https://restcountries.com/v3.1/all')
            let titleText = 'Showing all countries'
            let siteTitle = 'Countries API | Showing all countries'
            if (searchValue !== '') {
                res = await fetch(
                    `https://restcountries.com/v3.1/name/${searchValue}`
                )

                titleText = `Countries that match ${searchValue}`
                siteTitle = `Search results: ${searchValue} | Countries API`
            }

            if (regionValue !== '') {
                res = await fetch(
                    `https://restcountries.com/v3.1/region/${regionValue}`
                )

                siteTitle = `${regionValue} | Countries API`
                titleText = `Countries in ${regionValue}`
            }

            const data = await res.json()

            if (data.status) {
                console.log(data)
                setError(true)
                return setErrorMessage(data.message)
            }
            setCountriesData(data)
            setTitle(titleText)
            setHelmetTitle(siteTitle)
            setError(false)
            setErrorMessage(null)
            setLoading(false)
        }

        getCountries()

        // return () => setLoading(true)
    }, [searchValue, regionValue, title, helmetTitle])

    const Content = () => {
        if (error) {
            return (
                <div className="title is-2 theme-colour">
                    Error: {errorMessage}
                </div>
            )
        }

        if (loading) {
            return <div className="title is-2 theme-colour">Loading...</div>
        }

        return (
            <>
                <Helmet>
                    <title>{helmetTitle}</title>
                </Helmet>
                <h1 className="title is-2 theme-colour">{title}</h1>
                <section className={`${countries} columns is-multiline`}>
                    {countriesData.map((country) => (
                        <CountryCard {...country} key={country.ccn3} />
                    ))}
                </section>
            </>
        )
    }

    return <Content />
}

export default CountriesList
