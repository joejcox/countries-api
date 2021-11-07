import { Link } from 'react-router-dom'

const CountryCard = ({
    name: { common } = {},
    flags: { png } = {},
    population,
    region,
    capital,
}) => (
    <div className="column is-full is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
        <div className="card">
            <figure className="image is-2by1">
                <Link to={`/country/${common}`}>
                    <img
                        className="image"
                        src={png}
                        alt={`Flag of ${common}`}
                    />
                </Link>
            </figure>
            <div className="card-text">
                <h2 className="card-title">
                    <Link to={`/country/${common}`}>{common}</Link>
                </h2>
                <p className="card-info">
                    <strong>Population:</strong> {population}
                </p>
                <p className="card-info">
                    <strong>Region:</strong> {region}
                </p>
                <p className="card-info">
                    <strong>Capital:</strong> {capital}
                </p>
            </div>
        </div>
    </div>
)

export default CountryCard
