import classes from './ServicesSection.module.css'
import CardList from "../UI/CardList";

function ServicesSection(){
    return(
        <div className={classes.services}>
            <CardList />
        </div>
    )
}

export default ServicesSection;