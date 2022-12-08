import OfficesCardList from "../UI/OfficesCardList";


function OfficesSection() {
    return (
        <section>
            <div>
                <h3>
                    Improve the lives of millions. Change yours forever.
                </h3>
                <p>
                    More than 2600 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Munich, Istanbul, Rome, Rio, Bologna, Mexico City and Curitiba, our search for great talent never stops.
                </p>
            </div>
            <div>
                <OfficesCardList />
            </div>
        </section>
    )
}

export default OfficesSection;