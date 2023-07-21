import './Cards.css';

function Cards(props){
    const classes = 'cards ' + props.className; 
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Cards;