import React from 'react';
import VideoListItem from './video_item';

const VideoList = (props) => {
    const videos_items = props.videos.map((video) =>{
        return <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={video.etag} video={video} />
    }); // an array of videos
    return (
            <ul className="col-md-4 list-group">
                {videos_items}
            </ul>
    );
}
export default VideoList;