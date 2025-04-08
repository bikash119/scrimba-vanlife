import Badge from "../Badge/Badge"
import { Link } from "react-router"
export default function Card(props) {
    return (
        <Link to={`/vans/${props.id}`} className="card">
            <div className="card">
                <div className="card-image">
                    <img src={props.imageUrl} alt={props.name} />
                </div>
                <div className="card-info">
                    <h3 className="card-info-name">{props.name}</h3>
                    <h3 className="card-info-price">${props.price}<br/></h3>
                    <p className="card-info-unit">/day</p>
                </div>
                <div className="card-type">
                    <Badge text={props.type} variant={props.type}/>
                </div>
            </div>
        </Link>
    )
}