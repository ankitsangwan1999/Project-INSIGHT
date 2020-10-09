import React from 'react';

const Desc = (props) =>{
	if(!props.video){
        return <div></div>
    }
    const video = props.video;
    return(
	    <div className="card desc">
	        <div className="card-header">
	            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#desc"><b>Description</b></button>
	        </div>
	        <div className="card-body">
	            <div id="desc" className="collapse">
	                <p className="card-text">{video.snippet.description}</p>
	            </div>
	        </div>
	    </div>
    );
}
export default Desc; // allowing Desc Functional Component to be Rendered by other files.