import React, { useState } from 'react'
import './Add.css'

function Add({ data, setData }) {
    const [uzb, setUzb] = useState("")
    const [category, setCategory] = useState("")
    const [ing, setIng] = useState("")
    return (
        <>
            <section className="section3">
                <div className="container">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const obj = {
                            id: Math.floor(Math.random() * 999999),
                            english: ing,
                            uzbek: uzb,
                            category: category
                        }
                        if (uzb == "" || ing == "" || category == "") {
                            alert("Ma'lumotlarni to'liq kiriting")
                        } else {
                            setData(prev => [...prev, obj])

                            setCategory("")
                            setIng("")
                            setUzb("")
                        }
                    }} action="">
                        <div className="row">
                            <h3 className="label">Inglizcha so'z kiriting</h3>
                            <input onInput={(e) => {
                                setIng(e.target.value)
                            }} type="text" placeholder='Soz kiriting' />
                        </div>

                        <div className="row">
                            <h3 className="label">Category kiriting</h3>
                            <input onInput={(e) => {
                                setCategory(e.target.value)
                            }} type="text" placeholder='Kategory' />
                        </div>

                        <div className="row">
                            <h3 className="label">O'zbekcha so'z kiriting</h3>
                            <input onInput={(e) => {
                                setUzb(e.target.value)
                            }} type="text" placeholder='Ozbekcha soz' />
                        </div>

                        <button className="btn-saqlash">Saqlash</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Add