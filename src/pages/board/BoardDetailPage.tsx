import { useParams } from 'react-router-dom'

function BoardDetailPage() {
    const { id } = useParams()

    return <h1>게시글 상세 - {id}</h1>
}
export default BoardDetailPage