import classes from './CardList.module.css'
import CardItem from "./CardItem";

function CardList(props) {
    return (
        <ul className={classes.list}>
            <CardItem color='#1b2734' image='https://www.docplanner.com/icons/icon-patients.svg' title='For patients' text='Find a doctor, book a visit and solve any health-related doubt' drop='Choose country' />
            <CardItem color='#3d83df' image='https://www.docplanner.com/icons/icon-doctors.svg' title='For doctors' text='Save time managing visits and cut no-shows by half' drop='Choose country' />
            <CardItem color='#00ccb1' image='https://www.docplanner.com/icons/icon-clinics.svg' title='For clinics' text='Deliver an exceptional patient experience in your clinic' drop='2 to 20 specialists' />
        </ul>
    )
}

export default CardList;