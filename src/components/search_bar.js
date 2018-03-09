import React,{Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={term:''};
  }

  render(){
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onChangeOfTerm(event.target.value)}
        />
      </div>
    );
  }
  onChangeOfTerm(term){
    this.setState({term});
    this.props.onChangeOfSearch(term);
  }
}
export default SearchBar;
