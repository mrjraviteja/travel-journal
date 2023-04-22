import Path from '../assets/path.png'

function Card(props){
    return(
        <div className="card">
            <img src={props.item.imageUrl} className="card-img"/>
            <div className="card-loc">
                <h5 className="card-info-location">
                    <img src={Path}/>
                    &nbsp;{props.item.location}
                    <a href={props.item.googleMapsUrl} className="card-info-gurl" target='_blank'>View on Google Maps</a>
                </h5>
                <div className="card-info">
                    <h1 className="card-info-title">{props.item.title}</h1>
                    <h2 className="card-info-duration">{props.item.startDate} - {props.item.endDate}</h2>
                    <p className="card-info-desc">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;