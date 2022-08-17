import React from 'react'
import MusicListItem from './MusicListItems';

const MusicList = ({songs}) => {

    const songItems = songs.map((song, index)=>{
        return <MusicListItem song={song} position={index}/>
    })

    return(
        <div>
            <ul>
                {songItems}
            </ul>
        </div>
    )
}

export default MusicList;