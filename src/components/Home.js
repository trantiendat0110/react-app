import {useEffect} from 'react'
import './home.scss'
function Home({ListSong}) {
    useEffect(() => {
        const thumb = document.querySelector('#thumb')
  
        // xử lý sự kiên scroll list
        document.addEventListener('scroll', () => {
          var scroll = window.scrollY
          var newWidth = 200 - scroll
          thumb.style.width = newWidth
          thumb.style.width =  newWidth > 0 ? newWidth + 'px' : 0
          thumb.style.opacity = newWidth / 200
        })
      }, [])

    return (
        <div className='' id='home'>
            <div id='music'>
                <div id="playList">
                    {ListSong.map((song, index) => {
                        return (
                            <div key={index} className='scorse'>  
                                <img src={song.img} alt=''/>
                                <div className='title'>
                                    <h3>{song.name}</h3>
                                    <p>{song.singer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Home