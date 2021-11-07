import { Switch, Route, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Country from './pages/Country'

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
                <Route path="/country/:name">
                    <Country />
                </Route>
                <Route path="/country">
                    <Redirect to="/" />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App
