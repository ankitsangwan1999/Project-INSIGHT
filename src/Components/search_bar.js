import React, { Component } from 'react' // As whenever we change JSX into the normal javascript then it is done by a call like React.createElement()
//                   |
//                  \ /
//           const Component = React.Component;

// So, to use interpret JSX React module is required to import.

// A functional Component
// const SearchBar = () => {
//     return <input />; // returning the JSX. This JSX is being Rendered to the DOM.
// };

// A class Based Component will have its own property and component.
// class SearchBar extends React.Component { // inheriting the React.Component class(this is React's Base Component Class)
//     render(){ // a must method inside a class component
//         return <input />;
//     }
// }

// Cleaning up the Component made above using ES6 syntax
class SearchBar extends Component { // inheriting the React.Component

    constructor(props){
               // console.log("lala");
        super(props); // super is used to call a Function of the Parent Class(here it is Component)
        this.state = { term: ''};
    }


    render(){ // a must function inside a class component
        // console.log(this.state.term);
        return (
            <div >
                    <div className="search-bar">
                         <a><img style={{"vertical-align":"middle"}} src="../../style/Logo/search.svg" ></img></a>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={(event) => this.onInputChange(event.target.value)}
                        />
                    </div>
                </div>
        );// returning the JSX. This JSX is being Rendered to the DOM.
        // value={this.state.term} make the html element controlled
    }

    onInputChange(term){
        // console.log(event_obj.target.value);
        this.setState({term: term}); // Setting the new State of our Component.
        this.props.onSearchTermChange(term);
    }


}

export default SearchBar; // Any file that will import SearchBar will get the SearchBar component.

