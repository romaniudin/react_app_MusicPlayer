import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class SongDetails extends Component {

    render() {
        const { match, songs, play} = this.props
        const songId = Number(match.params.id)
        const song = songs.filter(song => songId ===song.id)   
        return (
            this.props.songs.length && 
            <div>
                <Link id='detailsLink' to='/'><i className='large material-icons'>keyboard_return</i></Link>
            <div className='container' id='songDetails'>
                <h2>{song[0].title} 
                <button onClick={()=>play(songId)}id='detailsBnt' className="waves-effect waves-light btn-small">
                <i className='tiny material-icons'>play_arrow</i></button></h2>
                <p id='songDescription'>{song[0].description}</p>
            </div>
            </div>
        )
    }
}

export default SongDetails;