
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <Link to="/" className="logo">
                    WeatherToWear
                </Link>

                <Navigation />
            </div>
        </header>
    )
}

export default Header
