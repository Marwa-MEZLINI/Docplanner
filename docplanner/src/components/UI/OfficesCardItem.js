import Card from "./Card";
import classes from './OfficesCardItem.module.css'

function OfficesCardItem(props) {
    return (
        <li className={classes.item} >
            <Card>
                <img src={props.image} />
                <div className={classes.content} >
                    <p>
                        {props.country}
                    </p>
                    <button>SEE OPENINGS</button>
                </div>
            </Card>
        </li>
    )
}

export default OfficesCardItem;