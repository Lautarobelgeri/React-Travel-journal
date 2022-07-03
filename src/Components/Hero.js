import React from "react"

export default function Hero(props){
    return(
        <article className="hero">
            <h3>{props.item.title}</h3>
            <img className="image--card" src={props.item.imageUrl}></img>
            <img src="../images/gpsicon.png" alt="gps icon" className="gpsIcon"></img>
           <p> <span className="card--location">{props.item.location.toUpperCase()}</span><a href={props.item.googleMapsUrl} className="link"><span>View on Google Maps</span></a></p>
            <span className="date">{props.item.startDate} - {props.item.endDate}</span>
            <p className="card--text">{props.item.description}</p>
        </article>
    )
}