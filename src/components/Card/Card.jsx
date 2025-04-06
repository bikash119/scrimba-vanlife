import Badge from "../Badge/Badge"
export default function Card(props) {
    return (
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
    )
}