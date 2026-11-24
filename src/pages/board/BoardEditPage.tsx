import { useParams } from 'react-router-dom'

function BoardEditPage() {
    const { id } = useParams()

    return <h1>게시글 수정 - {id}</h1>
}
export default BoardEditPage