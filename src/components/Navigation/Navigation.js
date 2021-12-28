import React from 'react'
import './Navigation.scss'
import {useEffect, useRef} from 'react'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

export default function Navigation() {
    const user = useRef()
    const home = useRef()
    useEffect(() => {
        // xử lý ẩn Chuyển tab
        user.current.onclick = () => {
            $('#home').classList.add('displayNone')
            $('#user').classList.remove('displayNone')
            $('#home_main').classList.add('displayNone')
        }
        home.current.onclick = () => {
            $('#home').classList.remove('displayNone')
            $('#home_main').classList.remove('displayNone')
        }

        // xử lý focus tab
        const navBtn = $$('#nav li')
        navBtn.forEach((Btn) => {
            Btn.onclick = (e) => {
                $('.active').classList.remove('active')
                Btn.classList.add('active')
            }
        })
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
            </div>
            <ul id='nav'>
                <li className='music active' id='music'>
                    <i ref={home} className="fal fa-music"></i>
                </li>
                <li  className='user'>
                    <i ref={user} className="fal fa-user"></i>
                </li>
            </ul> 
        </>
    )
}
