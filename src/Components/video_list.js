import React from 'react';
import VideoListItem from './video_item';

const VideoList = (props) => {
    const videos_items = props.videos.map((video) => { // using the map property of JS array
        return <VideoListItem
            video={video} />
    }); // an array of videos
    return (
        <div>
            <ul className="col-md-4 list-group" >
                {videos_items}
            </ul>
        </div>
    );
}
export default VideoList;