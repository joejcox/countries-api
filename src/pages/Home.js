import { useState } from 'react'
import Search from '../components/Search'
import OptionFields from '../components/OptionFields'
import CountriesList from '../components/CountriesList'

const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [regionValue, setRegionValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleRegionChange = (e) => {
        setRegionValue(e.target.value)
    }

    const resetRegion = () => {
        setRegionValue('')
    }

    return (
        <>
            <Search change={(e) => handleChange(e)} value={searchValue} />
            <main className="main_content" role="main">
                <OptionFields
                    change={(e) => handleRegionChange(e)}
                    searchValue={searchValue}
                    reset={() => resetRegion()}
                />
                <CountriesList
                    searchValue={searchValue}
                    regionValue={regionValue}
                />
            </main>
        </>
    )
}

export default Home
