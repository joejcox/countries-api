import { useEffect, useState } from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { theme_button } from './ThemeButton.module.css'

const ThemeButton = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const darkModeSaved = JSON.parse(localStorage.getItem('dark'))
        setIsDark(darkModeSaved)
    }, [])

    const handleClick = () => {
        document.body.classList.toggle('dark')
        localStorage.setItem('dark', !isDark)
        setIsDark(!isDark)
    }

    const LightModeText = () => (
        <>
            <BsFillSunFill /> Light Mode
        </>
    )
    const DarkModeText = () => (
        <>
            <BsFillMoonFill /> Dark Mode
        </>
    )

    return (
        <button className={theme_button} onClick={() => handleClick()}>
            {isDark ? <LightModeText /> : <DarkModeText />}
        </button>
    )
}

export default ThemeButton
