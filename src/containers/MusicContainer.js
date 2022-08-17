import React, {useState, useEffect} from 'react'
import MusicList from '../components/MusicList'

const MusicContainer = () => {
    const[songs, setSongs] = useState([])


useEffect(() =>{
    getChartMusic()
}, [])

const getChartMusic = function(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(res => res.json())
    .then(data => setSongs(data.feed.entry))
}

return(
    <div className="music-container">
        <MusicList songs={songs}/>
    </div>
)
}

export default MusicContainer