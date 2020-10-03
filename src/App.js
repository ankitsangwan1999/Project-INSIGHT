// Create a New Component. This will produce some HTML 

// to render the component
import _ from 'lodash';
import React, {Component} from 'react';
//to insert the rendered app to the DOM 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./Components/search_bar";
import VideoList from "./Components/video_list";
import VideoDetail from "./Components/video_player";
import Desc from "./Components/description";
import Footer from "./Components/footer";
import './style.css'

// JSX - can't be interpret by the browser.
// So, as our project is having webpack and bable installed. they will be used to interpret the JSX and ES6 to the vannila JS which is understood by the browser. 

const API_KEY = 'AIzaSyCt-gfvzQj2MglECoC13ETcXElCtMGCo1k';



class App extends Component{ // App(a component) is a const => we cannot reassign App in coming lines.

	constructor(props){
		super(props);
		this.state = {videos: [], selectedVideo: null};
		this.videoSearch('BRAND');
	}

	videoSearch(term){
		let comp = this;
		var count = 20;
		YTSearch(
			{
				key: API_KEY,
				term: term,
				order: 'viewCount',
				maxResults: count
			},
			function(videos) {
				console.log(comp);
				comp.setState({videos: videos, selectedVideo: videos[0]}); // or // this.setState({videos:videos});
			}
		);
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);

		return(
			<div>
				<div className="parent-div">
					<div className="logo">
						<img src="style/Logo/Logo_1.jpg" />
					</div>
					<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
					<VideoDetail video={this.state.selectedVideo}/>
					<VideoList onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
							 videos = {this.state.videos} />	
				</div>
				<div>
					<Footer video={this.state.selectedVideo} />
				</div>
			</div>
		);
	}

}

// IMP: SearchBar here means an instance of Class SearchBar imported.
// IMP:-<SearchBar /> // Means we are Rendering the Search Component, Rendering the SearchBar Component.

export default App; 
// Take this generated HTML and add it to the DOM.
