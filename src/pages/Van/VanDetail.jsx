import { useParams } from "react-router"

export default function VanDetail() {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Van Detail</h1>
        </div>
    )
}