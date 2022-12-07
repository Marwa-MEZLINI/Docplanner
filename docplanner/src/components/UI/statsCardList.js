import StatsCardItem from './statsCardItem';
import classes from './statsCardList.module.css';

function StatsCardList() {
    return (
        <ul className={classes.list} >
            <StatsCardItem image='https://www.docplanner.com/img/flag.png' stat='Leader in 13 countries' description='Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile' className={classes.first} />
            <StatsCardItem image='https://www.docplanner.com/img/visits.png' stat='13,000,000 appointments' description='booked last month' className={classes.second} />
            <StatsCardItem image='https://www.docplanner.com/img/patients.png' stat='85,000,000 patients' description='visit our website each month' className={classes.third} />
            <StatsCardItem image='https://www.docplanner.com/img/doctors.png' stat='190,000 active doctors' description='trust our solutions' className={classes.fourth} />
        </ul>
    )
}

export default StatsCardList;