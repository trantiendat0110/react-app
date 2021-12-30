import React from 'react'
import './Navigation.scss'
import {useEffect, useRef} from 'react'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

export default function Navigation() {
    const userRef = useRef()
    const homeRef = useRef()
    useEffect(() => {
        // xử lý ẩn Chuyển tab
        userRef.current.onclick = () => {
            $('#home').classList.add('displayNone')
            $('#user').classList.remove('displayNone')
            $('#home_main').classList.add('displayNone')
        }
        homeRef.current.onclick = () => {
            $('#home').classList.remove('displayNone')
            $('#home_main').classList.remove('displayNone')
        }
    }, [])

    return (
        <>
            <div className='' id="home_main">
                <div className="header">
                    <h2>Now Playing</h2>
                    <p>Tên bài hát</p>
                </div>
                <div className="cd">
                    <img id="thumb" src='' alt="" style={{width: 200}}/>
                </div>
                <div style={{
                    display: 'flex', 
                    justifyContent: 'space-between'
                }}>
                    <ul className='time'>
                        <li className='time_m'>0 : </li>
                        <li className='time_s'>0</li>
                    </ul>
                    <ul className='fullTime'>
                        <li className='fullTime_m'>10 : </li>
                        <li className='fullTime_s'>10</li>
                    </ul>
                </div>
            </div>
            <ul id='nav'>
                <li className='music active' id='music'>
                    <i ref={homeRef} className="fal fa-music"></i>
                </li>
                <li  className='user'>
                    <i ref={userRef} className="fal fa-user"></i>
                </li>
            </ul> 
        </>
    )
}
