import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from  './components/video_list';
import VideoDetail from './components/video_details';


const API_KEY = 'AIzaSyBuuCdlGjidVxiR_zc8l2RGrzZPbqR85tk';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('reactjs');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    render() {

        // video search only call every 300 milliseconds
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div className="col-md-12">
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}



ReactDOM.render(<App />, document.querySelector('.container-fluid'));
