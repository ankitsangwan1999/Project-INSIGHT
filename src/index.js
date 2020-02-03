// Create a New Component. This will produce some HTML 

// to render the component
import _ from 'lodash';
import React, {Component} from 'react';
//to insert the rendered app to the DOM 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./Components/search_bar";
import VideoList from "./Components/video_list";
import VideoDeatil from "./Components/video_player";
import Footer from "./Components/footer";

// JSX - can't be interpret by the browser.
// So, as our project is having webpack and bable installed. they will be used to interpret the JSX and ES6 to the vannila JS which is understood by the browser. 

// const API_KEY = 'AIzaSyC0CFmT3iRcG-JQTxQxcexhJR6w32tDT_A'; //1999
// const API_KEY = 'AIzaSyBZsSBjhhUSR_HUKoeFd3n-eE9rDuIRvyc'; //1955
const API_KEY = 'AIzaSyDVMBWZLc5f_9xIKQCLexLeLwuYQNmHq-Q'; //199205

class App extends Component{ // App(a component) is a const => we cannot reassign App in coming lines.

	constructor(props){
		super(props);
		this.state = {videos: [], selectedVideo: null};
		this.videoSearch('Garmi-Song');
	}

	videoSearch(term){
		let comp = this;
		YTSearch(
			{
				key: API_KEY,
				term: term
			},
			function(videos) {
				// console.log(comp);
				comp.setState({videos: videos, selectedVideo: videos[0]}); // or // this.setState({videos:videos});
			}
		);
	}

	render() {
		// console.log("HEllo");

		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);

		return (
				<div>
					<div className="logo">
						<img src="./style/Logo/Logo_1.jpg" />
					</div>

					<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
					<div className="row">
						<VideoDeatil video={this.state.selectedVideo}/>
						<VideoList onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
							   videos={this.state.videos} />
					</div>
				<div className="col-md-12">
					<Footer video={this.state.selectedVideo} />
				</div>
				</div>
		);
	}

}

// IMP: SearchBar here means an instance of Class SearchBar imported.
// IMP:-<SearchBar />   // Means we are Rendering the Search Component, Rendering the SearchBar Component.


// Take this generated HTML and add it to the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
