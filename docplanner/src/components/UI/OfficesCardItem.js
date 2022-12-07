import Card from "./Card";

function OfficesCardItem(props) {
    return (
        <li>
            <Card>
                <img src={props.image} />
                <div>
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