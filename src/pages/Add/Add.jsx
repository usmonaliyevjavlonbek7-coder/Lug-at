import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Add.css'

function Add({ setSozlar }) {
    const [ozbekcha, setOzbekcha] = useState("")
    const [kategoriya, setKategoriya] = useState("")
    const [inglizcha, setInglizcha] = useState("")
    const sahifaga = useNavigate()

    return (
        <>
            <section className="section3">
                <div className="container">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const yangiSoz = {
                            id: Math.floor(Math.random() * 999999),
                            inglizcha: inglizcha,
                            ozbekcha: ozbekcha,
                            kategoriya: kategoriya,
                            yodlangan: false
                        }
                        if (ozbekcha == "" || inglizcha == "" || kategoriya == "") {
                            alert("Ma'lumotlarni to'liq kiriting")
                        } else {
                            setSozlar(oldingi => [...oldingi, yangiSoz])
                            sahifaga("/")
                        }
                    }} action="">
                        <div className="row">
                            <h3 className="label">Inglizcha so'z kiriting</h3>
                            <input onInput={(e) => {
                                setInglizcha(e.target.value)
                            }} type="text" placeholder='Soz kiriting' />
                        </div>

                        <div className="row">
                            <h3 className="label">Category kiriting</h3>
                            <input onInput={(e) => {
                                setKategoriya(e.target.value)
                            }} type="text" placeholder='Kategory' />
                        </div>

                        <div className="row">
                            <h3 className="label">O'zbekcha so'z kiriting</h3>
                            <input onInput={(e) => {
                                setOzbekcha(e.target.value)
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
