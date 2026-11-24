
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'

import WeatherMain from './pages/Weather/WeatherMain'
import WeatherResult from './pages/Weather/WeatherResult'

import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'

import BoardListPage from './pages/board/BoardListPage'
import BoardDetailPage from './pages/board/BoardDetailPage'
import BoardWritePage from './pages/board/BoardWritePage'
import BoardEditPage from './pages/board/BoardEditPage'

import MyPage from './pages/mypage/MyPage'
import MyPostPage from './pages/mypage/MyPostPage'
import MyCommentPage from './pages/mypage/MyCommentPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<WeatherMain />} />
                    <Route path="/weather/result" element={<WeatherResult />} />

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />

                    <Route path="/board" element={<BoardListPage />} />
                    <Route path="/board/write" element={<BoardWritePage />} />
                    <Route path="/board/:id" element={<BoardDetailPage />} />
                    <Route path="/board/edit/:id" element={<BoardEditPage />} />

                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mypage/posts" element={<MyPostPage />} />
                    <Route path="/mypage/comments" element={<MyCommentPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
