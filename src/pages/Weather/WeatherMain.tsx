function WeatherMain() {
    return (
        <div className="main-content">
            <h1>오늘의 날씨</h1>

            <section className="content-box">
                <h2>시간별 날씨</h2>

                <table>
                    <thead>
                    <tr>
                        <th>시간</th>
                        <th>날씨</th>
                        <th>기온</th>
                        <th>강수확률</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>09:00</td>
                        <td>맑음</td>
                        <td>18℃</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>구름 조금</td>
                        <td>22℃</td>
                        <td>20%</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            <section className="content-box">
                <h2>오늘의 날씨 안내</h2>
                <p>
                    오늘은 대체로 맑고 따뜻한 날씨가 예상됩니다.
                    오후에는 구름이 조금 늘어날 수 있으니
                    외출하실 때 참고해 주세요.
                </p>
            </section>
        </div>
    )
}

export default WeatherMain