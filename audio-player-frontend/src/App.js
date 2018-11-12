
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: [],
      id: 0,
      play: false 
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/song')
      .then(({data}) => this.setState({songs: data})).catch(err => console.log(err))
  }

  play = (id) => {
    if (this.state.play) {
      this.setState({ 
      id: id,  
      play: false 
    });
      this.audio.play();
    } else {
      this.setState({ 
        id: id,
        play: true
    });
      this.audio.pause();
    }
  }

  previous = (e) => {
    e.preventDefault()
    if(this.state.id) {
    this.setState({
      id: this.state.id-1,
      play: true,
    })
    this.audio.play()
  } else {
      console.log('No id')
    }
  }

  next = () => {
    if(this.state.id<this.state.songs.length-1) {
    this.setState({
      id: this.state.id+1
    },() =>console.log(this.state.id, this.state.songs.title))
  } else {
    console.log("end of id")
  }
}

  render() {
    return (
      <div className="App center-align card-panel black lighten-2">
        <Switch>
          <Route exact path="/" render={(props)=> <SongsList {...props} songs={this.state.songs} play={this.play}/>}/>
          <Route path='/:id' render={(props)=> <SongDetails {...props} songs={this.state.songs} play={this.play} />}/>
        </Switch>
        
       { this.state.songs.length && 
        <div> 
          <div className="row center-align">
              <div id='image' className="col s12 m4 center-align">
                  <div className="card ">
                    <div className="card-image">
                        <img src={this.state.songs[this.state.id].image} alt='album_cover'/>
                      </div>
                </div>
              </div>
            </div>
           
            <h6> <marquee width="600" behavior="scroll" direction="left"> Now Playing: {this.state.songs[this.state.id].title} / Singer: {this.state.songs[this.state.id].author} </marquee> </h6>
            <audio controls
              src={this.state.songs[this.state.id].source}
              ref={(audio) => { this.audio = audio } }
              >
            </audio><br/>
            <button onClick={this.previous} disabled={!this.state.id} className="waves-effect waves-light btn-small" ><i className='tiny material-icons'>skip_previous</i></button>
            <button onClick={()=>this.play(this.state.id)} className="waves-effect waves-light btn-small" ><i className='tiny material-icons'>play_arrow</i></button>
            <button onClick={()=>this.play(this.state.id)} className="waves-effect waves-light btn-small" ><i className='tiny material-icons'>pause</i></button>
            <button onClick={this.next} disabled={this.state.id===this.state.songs.length-1} className="waves-effect waves-light btn-small" ><i className='tiny material-icons'>skip_next</i></button>
         </div> 
        }
      </div>
    );
  }
}

export default App;
