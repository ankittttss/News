import React from "react";

const NewsItem = (props)=>{
   
      let {title,description, imageUrl,newsUrl, author, date} =props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-89506059,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-20220/89506059.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted"> By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
