import StatsCardList from "../UI/statsCardList";
import classes from './StatsSection.module.css'

function StatsSection() {
    return (
        <section className={classes.stats} >
            <div className={classes.inner}>
                <aside className={classes.header} >
                    <h3>The world's biggest healthcare platform</h3>
                    <p>We work from 9 offices all over the world, bringing Docplanner Group to life in 13 countries.</p>
                </aside>
                <div className={classes.cards} >
                    <StatsCardList />
                </div>
            </div>
        </section>
    )
}

export default StatsSection;