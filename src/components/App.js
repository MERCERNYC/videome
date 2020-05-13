import React from 'react';
import SearchBar from './SearchBar'; 
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

import { withAuthenticator } from 'aws-amplify-react'
import Amplify  from 'aws-amplify';

import aws_exports from './aws-exports';


Amplify.configure(aws_exports);


class App extends React.Component {
  
    
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('buildings')
    }

    onTermSubmit =  async term => {
        // console.log(term);
      const response = await youtube.get('/search', {
            params : {
                q: term
            }
        });
        // console.log(response);
        this.setState ({
             videos: response.data.items,
             selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        // console.log("from the app", video);
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                    <div className= 'eleven wide column'>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className='five wide column'>
                    <VideoList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos}      
                    />
                </div>  
                </div>  
              </div>    
           </div>
        );
    }
}

export default withAuthenticator(App, { includeGreetings: true });

