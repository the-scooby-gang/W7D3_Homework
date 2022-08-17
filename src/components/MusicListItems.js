import React from 'react';

const MusicListItem = ({song, position}) => {
    return(
        <div>
    <p>Chart Position: {position +1}
        Artist: {song['im:artist'].label}
        Song: {song['im:name'].label}
    </p>
    <img src={song['im:image'][1].label}/>
    <audio controls src={song.link[1].attributes.href}/>
    </div>)
}

export default MusicListItem