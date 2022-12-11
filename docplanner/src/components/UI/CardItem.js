import classes from './CardItem.module.css'
import Card from "./Card";
import Select from './Select';

import { useContext } from 'react';
import ClickContext from '../context';

function CardItem(props) {
    const clickCtx = useContext(ClickContext)
    console.log(clickCtx)


    return (

        <li className={classes.item} style={{ backgroundColor: `${props.color}` }} onClick={() => clickCtx.changeTitle(props.title)}>
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
                <div className={classes.select}>
                    <Select />
                </div>
            </Card>
        </li>
    )
}

export default CardItem;