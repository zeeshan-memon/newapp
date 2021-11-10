import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title, description, imageUrl, newUrl, author, date, source} = this.props;
        return (
           <div >
                <div className="card" style={{"textAlign": "center"}}>
                <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:1,}}>
                     {source}  
                </span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toDateString()}</small></p>
                    <a href={newUrl} target=" _blank" className="btn btn-sm btn-dark">Load More</a>
                </div>
            </div>
           </div>
        )
    }
}

export default NewsItem
