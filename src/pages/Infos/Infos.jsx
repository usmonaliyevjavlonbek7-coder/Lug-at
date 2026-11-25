import React from 'react'
import './Infos.css'

function Infos({ sozlar }) {
    return (
        <div className='info'>
            <div className="container">
                <h1 className='title'>Yodlanmagan so'zlar</h1>

                <div className="cards">
                    {sozlar.map((soz) => {
                        if (soz.yodlangan === false) {
                            return (
                                <div key={soz.id} className="card_box">
                                    <h1>{soz.inglizcha}</h1>
                                    <h3 >Yodlanmagan</h3>
                                </div>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Infos
