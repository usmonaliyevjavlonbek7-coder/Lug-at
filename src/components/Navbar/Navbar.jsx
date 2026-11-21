import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { FaRegNoteSticky } from 'react-icons/fa6'

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <h1>Lug'at</h1>
                </div>
                <div className="btns">
                    <NavLink to={"/"}><IoHome className='icon' /> <h3>Bosh Sahifa</h3></NavLink>
                    <NavLink to={"/add"}><IoMdAdd className='icon2' /> <h3>So'z Qo'shish</h3></NavLink>
                    <NavLink to={"/test"}><FaRegNoteSticky className='icon' /> <h3>Test</h3></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar