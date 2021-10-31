import { AiOutlineSearch } from 'react-icons/ai'
import { search, search_icon, input } from './Search.module.css'

const Search = () => (
    <section className={search}>
        <span className={search_icon}>
            <AiOutlineSearch />
        </span>
        <input className={input} placeholder="Search for a country..." />
    </section>
)

export default Search
