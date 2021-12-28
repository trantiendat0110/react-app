import React from 'react'
import './User.scss'
export default function User() {
    return (
        <div className='displayNone' id='user'>
            <h3>Hello Again!</h3>
            <p>Đăng Nhập</p>
            <div className='input'>
                <input placeholder='Enter userName'></input>
                <input placeholder='PassWord'></input>
            </div>
            <h4>Lấy lại mật khẩu</h4>
            <a className='sign' href='https://trantiendat0110.github.io/react-app/'>Sign In</a>
            <h5>Tiếp tục với !</h5>
            <div className='link'>
                <a href='https://trantiendat0110.github.io/react-app/'><i style={{color: '#334fdb'}} className="fab fa-facebook"></i></a>
                <a href='https://trantiendat0110.github.io/react-app/'><i style={{color: 'brown'}} className="fab fa-google"></i></a>
                <a href='https://trantiendat0110.github.io/react-app/'><i style={{color: '#333'}} className="fab fa-apple"></i></a>
            </div>
            <p>Không có tài khoản <a href='https://trantiendat0110.github.io/react-app/' style={{color: 'red'}}>đăng lý ở đây</a></p>
        </div>
    )
}
