export default function Badge(props){
    return (
        <p className={props.variant}>
            {props.text}
        </p>
    )
}