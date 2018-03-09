import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY='AIzaSyA4QakW0LVTVCecZCiJ5C3lLT8YV4AuB74';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      videos:[],
      selectedVideo:null
    };
    this.onSearchTerm('jungles');

  }

  onSearchTerm(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  render(){
    const onSearchTerm=_.debounce((term) => {this.onSearchTerm(term) },300 );
    return (
    <div>
      <SearchBar onChangeOfSearch={onSearchTerm }/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos}/>
    </div>
  );
}

}

ReactDOM.render(<App/>, document.querySelector('.container'));
