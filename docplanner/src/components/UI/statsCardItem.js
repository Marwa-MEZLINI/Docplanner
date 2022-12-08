import classes from './StatsCardItem.module.css';
import Card from "./Card";

function StatsCardItem(props) {
    return (
        <li className={classes.item} >
            <Card>
                <div>
                    <img src={props.image} />
                    <p className={classes.stat} >
                        {props.stat}
                    </p>
                    <p className={classes.description} >
                        {props.description}
                    </p>
                </div>
            </Card>
        </li>
    )
}

export default StatsCardItem;