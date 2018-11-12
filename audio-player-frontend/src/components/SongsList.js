import React, {Component} from 'react';
//import SongDetails from './SongDetails';
import Song from './Song'

class SongsList extends Component {
    render() {
        const songsList = this.props.songs.map((song, id) => {
            return <Song title={song.title} key={song.id} id={song.id} play={this.props.play} author={song.author}/>
        })
        return (
            <div className=' center-align songsList'>
                <h4 id='playList'>Play List</h4>
                <table className='center-align striped hoverable'>
                    <thead>
                        <tr>
                            <th className='center-align th'>Song Name</th>
                            <th className='center-align th'>Singer</th>
                            <th className='center-align th'>Action</th>
                        </tr>
                    </thead>
                   <tbody>
                       {songsList}
                 </tbody>
                </table>     
            </div>
        )
    }
}

export default SongsList;