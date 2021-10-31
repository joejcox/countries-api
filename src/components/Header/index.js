import { Link } from 'react-router-dom'
import ThemeButton from '../ThemeButton'
import { site_header, logo } from './Header.module.css'
const Header = () => (
    <header className={site_header}>
        <span className={logo}>
            <Link to="/">Where in the world?</Link>
        </span>
        <ThemeButton />
    </header>
)

export default Header
