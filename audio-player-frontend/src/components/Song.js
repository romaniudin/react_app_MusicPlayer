import React from 'react';
import { Link } from 'react-router-dom'

const Song = ({ title, id, author, play}) => {
    return (
        <tr>
         <td className='center-align'><h6><Link to= {`/${id}`}>{title}</Link></h6></td>
         <td className='center-align'><h6><Link to= {`/${id}`}>{author}</Link></h6></td>
         <td className='center-align'>
         <button onClick={()=>play(id)} className="waves-effect waves-light btn-small">
         <i className='tiny material-icons'>play_arrow</i>
         </button>
         </td>
        </tr>
    )
}
//play(id of song)
export default Song;