import { RiArrowDropDownLine } from 'react-icons/ri'
import {
    filter,
    filter_container,
    filter_arrow,
} from './OptionFields.module.css'

const OptionFields = () => (
    <section className={filter_container}>
        <span className={filter_arrow}>
            <RiArrowDropDownLine />
        </span>
        <select className={filter}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </section>
)

export default OptionFields
