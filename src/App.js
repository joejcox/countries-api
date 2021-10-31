import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Header from './components/Header'

// import { Switch, Route } from 'react-router-dom'

function App() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem('dark'))
        setIsDark(storedTheme)
    }, [])

    useEffect(() => {
        isDark === true && document.body.classList.add('dark')
    }, [isDark])

    return (
        <div className="app">
            <Header />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App
