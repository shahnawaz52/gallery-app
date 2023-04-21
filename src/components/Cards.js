const Cards = (props) => {
    return (
        <div className="col">
            <div className="card mb-5" style={{ width: "18rem" }}>
                <img src={props.src} class="card-img-top" alt={props.src} />
            </div>
        </div>
    )
}
export default Cards;