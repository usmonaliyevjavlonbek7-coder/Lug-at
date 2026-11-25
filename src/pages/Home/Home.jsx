import React, { useState } from 'react'
import './Home.css'

function Home({ sozlar, setSozlar }) {
    const [raqam, setRaqam] = useState(0)

    const keyingiSoz = () => {
        if (raqam >= sozlar.length - 1) {
            setRaqam(0)
        } else {
            setRaqam(raqam + 1)
        }
    }

    return (
        <>
            <section className='section1'>
                <div className="container">
                    <div className="card">
                        <div className="box">
                            <h3 className="category-text">{sozlar[raqam].kategoriya}</h3>
                            <h1 className="word-title">{sozlar[raqam].inglizcha}</h1>
                            <hr />
                            <h1 className="word-translation">{sozlar[raqam].ozbekcha}</h1>
                            <p className='word-misol'>I know a 28 of <span>words</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section2'>
                <div className="container">
                    <div className="btns">
                        <button onClick={() => {
                            setSozlar(oldingi => oldingi.map((soz, i) =>
                                i === raqam ? { ...soz, yodlangan: true } : soz
                            ))
                            keyingiSoz()
                        }} className="btn-yodladim">Yodladim</button>

                        <button onClick={() => {
                            setSozlar(oldingi => oldingi.map((soz, i) =>
                                i === raqam ? { ...soz, yodlangan: false } : soz
                            ))
                            keyingiSoz()
                        }} className="btn-yodlamadim">Yodlamadim</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
