import Search from '../components/Search'
import OptionFields from '../components/OptionFields'
import CountriesList from '../components/CountriesList'

const Home = () => (
    <>
        <Search />
        <main className="main_content" role="main">
            <OptionFields />
            <CountriesList />
        </main>
    </>
)

export default Home
