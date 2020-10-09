import React from 'react';

const VideoDetail = (props) =>{
    if(!props.video){
        return <div className="loading">Looking...</div>
    }
    const video = props.video;
    const videoId = video.id.videoId;

    const url = 'https://www.youtube.com/embed/' + videoId;
    return(
            <div className = "video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
                </div>

                <div className="details">
                    <div>
                        <b> {video.snippet.title} </b>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#desc"><b>Description</b></button>
                    </div>
                    <div className="card-body">
                        <div id="desc" className="collapse">
                            <p className="card-text">{video.snippet.description}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default VideoDetail;