function Card(props) {
    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src={props.img ? props.img : "https://im.mashina.kg/tachka/images//a/8/7/a873eb36333beceb933c89069ccbbc42_240x180.jpg"} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title} за {props.price}</h5>
                <p className="card-text">{props.description} </p>
                <a href="#" className="btn btn-primary">подробноее</a>
            </div>
        </div>


    )
}


export default Card; 


