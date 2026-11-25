import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="header-top">
                    <Link to="/" className="logo">
                        WeatherToWear
                    </Link>

                    <div className="account-menu">
                        <Link to="/login">로그인</Link>
                        <Link to="/signup">회원가입</Link>
                    </div>
                </div>

                <Navigation />
            </div>
        </header>
    )
}

export default Header