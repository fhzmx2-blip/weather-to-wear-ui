
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to="/">날씨</NavLink>
            <NavLink to="/board">게시판</NavLink>
            <NavLink to="/mypage">마이페이지</NavLink>
            <NavLink to="/login">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
        </nav>
    )
}

export default Navigation
