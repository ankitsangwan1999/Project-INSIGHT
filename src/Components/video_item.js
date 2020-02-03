import React from 'react'

const VideoListItem = (props) =>{
    const video = props.video;
    // console.log(video);
    // const selected_video = props.onVideoClick;
    const imageUrl = video.snippet.thumbnails.default.url;
    // console.log(video.snippet.title);
    return (
        <div>
            <li onClick={() => props.onVideoSelect(video)} className="list-group-item">
                <a>
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                  <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                  </div>
              </a>
            </li>
        </div>
    );
};
export default VideoListItem;