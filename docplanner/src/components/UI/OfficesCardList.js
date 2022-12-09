import OfficesCardItem from "./OfficesCardItem";
import classes from './OfficesCardList.module.css'

function OfficesCardList() {
    return (
        <ul className={classes.list} >
            <OfficesCardItem image='https://www.docplanner.com/images/warsaw.png' country='Warsaw' />
            <OfficesCardItem image='https://www.docplanner.com/images/barcelona.png' country='Barcelona' />
            <OfficesCardItem image='https://www.docplanner.com/images/munich.png' country='Munich' />
            <OfficesCardItem image='https://www.docplanner.com/images/istanbul.png' country='Istanbul' />
            <OfficesCardItem image='https://www.docplanner.com/images/rome.png' country='Rome' />
            <OfficesCardItem image='https://www.docplanner.com/images/bologna.png' country='Bologna' />
            <OfficesCardItem image='https://www.docplanner.com/images/curitiba.png' country='Curitiba' />
            <OfficesCardItem image='https://www.docplanner.com/images/mexico-city.png' country='Mexico City' />
        </ul>
    )
}

export default OfficesCardList;
