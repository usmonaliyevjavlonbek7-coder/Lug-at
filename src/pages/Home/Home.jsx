import React, { useState } from 'react'
import './Home.css'

function Home({ data }) {
    const [plus, setPlus] = useState(0)



    return (
        <>
            <section className='section1'>
                <div className="container">
                    <div className="card">
                        <div className="box">
                            <h3 className="category-text">{data[plus].category}</h3>
                            <h1 className="word-title">{data[plus].english}</h1>
                            <hr />
                            <h1 className="word-translation">{data[plus].uzbek}</h1>
                            <p className='word-misol'>I know a 28 of <span>words</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section2'>
                <div className="container">
                    <div className="btns">
                        <button onClick={() => {
                            if (plus >= data.length - 1) {
                                setPlus(0)
                            } else {
                                setPlus(plus + 1)
                            }
                        }} className="btn-yodladim">Yodladim</button>
                        <button onClick={() => {
                            if (plus >= data.length - 1) {
                                setPlus(0)
                            } else {
                                setPlus(plus + 1)
                            }
                        }} className="btn-yodlamadim">Yodlamadim</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home