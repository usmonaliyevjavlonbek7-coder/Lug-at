import React from 'react'
import './Infos.css'

function Infos({ data }) {
    return (
        <div className='info'>
            <div className="container">
                <h1 className='title'>Yodlanmagan so'zlar</h1>

                <div className="cards">
                    {data.map((item) => {
                        
                        if (item.learned === false) {
                            return (
                                <div key={item.id} className="card_box">
                                    <h1>{item.english}</h1>
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