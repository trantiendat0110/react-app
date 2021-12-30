import React from 'react'
import { useEffect, memo , useState, useCallback, useRef} from 'react'
import './navmusic.scss'
import song1 from '../../assets/Music/BuocQuaNhau-Vu-7120388.mp3'
import song2 from '../../assets/Music/AmThamBenEmPianoCover-AnCoong-4117631.mp3'
import song3 from '../../assets/Music/AnhSaiRoi-MTP-2647024.mp3'
import song4 from '../../assets/Music/BuocQuaMuaCoDon-Vu-6879419.mp3'
import song5 from '../../assets/Music/HenEmKiepSauOrinnRemix-LaDuyPhucTIB-6150700.mp3'
import song6 from '../../assets/Music/LaLung-Vu-4749614.mp3'
import song7 from '../../assets/Music/Mo-VuCatTuong-5958629.mp3'



const URLSong = [song1, song2, song3, song4, song5, song6, song7]
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


export default function NavMusic(props) {
    const ranger = useRef()
    const next = useRef()
    const back = useRef()


    useEffect(() => {
        const audio = $('#audio')
        const startPause = $('#start')
        const thumb = $('#thumb')
        const pInHeader = $('.header p')
        const downUp = $('#downUp')
        const songs = $$('.scorse')
        const time_s = $('.time_s')    
        const time_m = $('.time_m')
        const fullTime_s = $('.fullTime_s')
        const fullTime_m = $('.fullTime_m')
        const userS = $('.user')
        const homeS = $('.home')
        const navBtn = $$('#nav li')
        var timeS = 0
        var timeM = 0
        var app = {
          curentIndex: 0,
          isNav: false,
          isplay: false,
          
        // ///////////// Lang nghe su kien ///////////////////
            handleEvent: () => {

                setTimeout(() => {
                    audio.ontimeupdate = () => {
                        var countTime  = audio.currentTime / audio.duration  * 100
                        ranger.current.value = countTime
                    }
                    ranger.current.onchange = () => {
                        var seekTime  = ranger.current.value * audio.duration  / 100
                        audio.currentTime = seekTime
                    }
                }, 1000)


                // xu ly play and pause music
                startPause.onclick = () => {
                    if (app.isplay) {
                        app.isplay = !app.isplay
                        startPause.innerHTML = `<i class="fa fa-play-circle"></i>`
                        audio.pause()
                        
                    }
                    else {
                        app.isplay = !app.isplay
                        startPause.innerHTML = `<i class="far fa-pause-circle"></i>`
                        audio.play()
                    }

                }
                // xử lý next song, 
                next.current.onclick = () => {
                    if (app.curentIndex === 6) {
                        app.curentIndex = 0
                        app.curentIndex--
                    }
                    app.nextSong()
                }
                // xu lý back song
                back.current.onclick = () => {
                    if (app.curentIndex === 0) {
                        app.curentIndex = 6
                        app.curentIndex++
                    }
                    app.backSong()
                }
                audio.onended = () => {
                    app.nextSong()
                }
                // xử lý focus tab
                navBtn.forEach((Btn) => {
                    Btn.onclick = (e) => {
                        console.log('active')
                        $('.active').classList.remove('active')
                        Btn.classList.add('active')
                        app.downNav()
                    }
                })
                //  xử lý bật tắt navmussic 
                downUp.onclick = () => {
                    if (app.isNav) {
                        app.upNav()
                    }
                    else  {
                        app.downNav()
                    }
                }
                // xử lý hết bài
                audio.onended = () => {
                    app.nextSong()
                }
                // xử lý thời gian âm thanh
    

                // xử lý click song phát song và xử lý active song

                songs.forEach((song, index) => {
                    song.onclick = () => {
                        if ($('.activeSong')) {
                            $('.activeSong').classList.remove('activeSong')
                        }
                        app.curentIndex = index
                        app.loadCurentSong()
                        audio.play()
                        song.setAttribute('class', 'scorse activeSong')
                    }

                })

                
            },
            upNav: () => {
                app.isNav = !app.isNav
                downUp.innerHTML = '<i class="fas fa-sort-down"></i>'
                downUp.style.bottom = 190 + 'px'
                $('.nav_home').style.bottom =  30 + 'px'
            },
            downNav: () => {
                app.isNav = !app.isNav
                downUp.innerHTML = '<i class="fas fa-sort-up"></i>'
                downUp.style.bottom = 55 + 'px'
                $('.nav_home').style.bottom =  -105 + 'px'
            },
            nextSong: () => {
                app.curentIndex++
                app.loadCurentSong()
                audio.play()
            },
            backSong: () => {
                app.curentIndex--
                app.loadCurentSong()
                audio.play()
            },
            loadCurentSong: () => {
                pInHeader.innerText =  props.ListSong[app.curentIndex].name
                thumb.setAttribute('src', props.ListSong[app.curentIndex].img)
                audio.setAttribute('src', URLSong[app.curentIndex])
            },
            start: () => {
                // load song dau tien
                app.loadCurentSong()

                // xu ly du kien
                app.handleEvent()
            }
            
        }
        app.start()
      }, [])
    return (
        <>
            <div id='downUp'>
                <i className="fas fa-sort-down"></i>
            </div>
            {/* <div id='up'>
            </div> */}
            <div className="nav_home">
                <div className="main_nav_home">
                    <button id="repeat"><i className="fas fa-repeat"></i></button>
                    <button ref={back} id="back"><i className="fas fa-backward"></i></button>
                    <button id="start" className="BtnPlay"><i className="fa fa-play-circle"></i></button>
                    <button ref={next} id="next"><i className="fas fa-forward"></i></button>
                    <button className="" id="random"><i className="fas fa-random"></i></button>
                </div>
                <audio id="audio" src=""></audio>
                <input ref={ranger} id="progress" className="progress" type="range" defaultValue={0} step="0.1" min={0} max={100} />
            </div> 
        </> 
    )
}
