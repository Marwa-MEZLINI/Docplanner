import classes from './ServicesSection.module.css'
import CardItem from "../UI/CardItem";

function ServicesSection(props) {
    return (
        <ul className={classes.services}>
            <CardItem color='#00ccb1' image='https://www.docplanner.com/icons/icon-patients.svg' title='For patients' text='Find a doctor, book a visit and solve any health-related doubt' drop='Choose country' handle={props.handle} />
            <CardItem color='#3d83df' image='https://www.docplanner.com/icons/icon-doctors.svg' title='For doctors' text='Save time managing visits and cut no-shows by half' drop='Choose country' handle={props.handle} />
            <CardItem color='#1b2734' image='https://www.docplanner.com/icons/icon-clinics.svg' title='For clinics' text='Deliver an exceptional patient experience in your clinic' drop='2 to 20 specialists' handle={props.handle} />
        </ul>
    )
}

export default ServicesSection;