import StatsCardList from "../UI/statsCardList";

function StatsSection() {
    return (
        <section>
            <aside>
                <h3>The world's biggest healthcare platform</h3>
                <p>We work from 9 offices all over the world, bringing Docplanner Group to life in 13 countries.</p>
            </aside>
            <div>
                <StatsCardList />
            </div>
        </section>
    )
}

export default StatsSection;