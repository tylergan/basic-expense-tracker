import './Card.css'

export default function Card(props) {
    const classes = 'card ' + props.className
    return (
        <div className={classes}>{props.children}</div>  // props.children is a special property that makes content wrapped by the component available to wrapper component
    )
}