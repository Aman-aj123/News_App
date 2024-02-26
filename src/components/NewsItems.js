import React, { Component } from 'react'

export default class NewsItems extends Component {
     render(props) {
          const { title, description, imageUrl, newsUrl, author,publishedDate } = this.props;
          return (
               <>

                    <div className="card" onClick={() => { window.open(newsUrl, "_blank") }} style={{ width: '21rem', cursor: 'pointer' }}>
                         <img src={imageUrl} style={{ height: '190px', objectFit: 'cover' }} className="card-img-top" alt="..." />
                         <div className="card-body">
                              <h5 className="card-title">{title.slice(0, 50)}...</h5>
                              <p><b>Pulished At: </b>{publishedDate}</p>
                              <p className="card-text">{description.slice(0, 120)}...</p>
                              <p>~ {author.slice(0, 60)}...</p>
                              <a href={newsUrl} target="__blank" className="btn btn-primary">Read more</a>
                         </div>
                    </div>

               </>
          )
     }
}
