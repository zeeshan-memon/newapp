import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title, description, imageUrl, newUrl} = this.props;
        return (
           <div>
                <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newUrl} target=" _blank" className="btn btn-sm btn-dark">Load More</a>
                </div>
            </div>
           </div>
        )
    }
}

export default NewsItem
