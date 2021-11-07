import { AiOutlineSearch } from 'react-icons/ai'
import { search, search_icon, input } from './Search.module.css'

const Search = ({ change, value }) => {
    return (
        <section className={search}>
            <span className={search_icon}>
                <AiOutlineSearch />
            </span>
            <input
                className={input}
                placeholder="Search for a country..."
                onChange={change}
                value={value}
            />
        </section>
    )
}

export default Search
