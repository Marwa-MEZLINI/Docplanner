import classes from './CardItem.module.css'
import Card from "./Card";

function CardItem(props) {
    return (
        <li className={classes.item} style={{ backgroundColor: `${props.color}` }} >
            <Card>
                <div>
                    <div className={classes.icon}>
                        <img src={props.image} />
                    </div>
                    <div className={classes.title}>
                        <h3>{props.title}</h3>
                    </div>
                    <div className={classes.text}>
                        <p>{props.text}</p>
                    </div>
                </div>
                <div className={classes.link}>
                    <a href='#' >{props.drop}</a>
                </div>
            </Card>
        </li>
    )
}

export default CardItem;