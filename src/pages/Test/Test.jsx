import React, { useState, useEffect } from 'react'
import './Test.css'

function Test({ sozlar }) {
    const [raqam, setRaqam] = useState(0)
    const [variantlar, setVariantlar] = useState([])
    const [tugadi, setTugadi] = useState(false)
    const [vaqt, setVaqt] = useState(10)
    const [modal, setModal] = useState({ ochiq: false, xabar: '', tur: '' })

    useEffect(() => {
        if (tugadi) {
            return
        }
        setVaqt(10)
        const interval = setInterval(() => {
            setVaqt(oldingi => oldingi > 0 ? oldingi - 1 : 0)
        }, 1000)
        return () => clearInterval(interval)
    }, [raqam, tugadi])

    useEffect(() => {
        if (vaqt === 0 && !tugadi) {
            setModal({ ochiq: true, xabar: "Vaqt tugadi!", tur: 'vaqt' })
        }
    }, [vaqt])

    useEffect(() => {
        if (raqam < sozlar.length) {
            const togri = sozlar[raqam].inglizcha
            let royxat = [togri]

            while (royxat.length < 3 && royxat.length < sozlar.length) {
                let tasodifiyRaqam = Math.floor(Math.random() * sozlar.length)
                let tasodifiySoz = sozlar[tasodifiyRaqam].inglizcha

                if (!royxat.includes(tasodifiySoz)) {
                    royxat.push(tasodifiySoz)
                }
            }

            royxat.sort(() => Math.random() - 0.5)
            setVariantlar(royxat)
        }
    }, [raqam, sozlar])

    function keyingiSavol() {
        if (raqam === sozlar.length - 1) {
            setTugadi(true)
        } else {
            setRaqam(raqam + 1)
        }
    }

    function javobBerish(tanlangan) {
        if (tanlangan !== sozlar[raqam].inglizcha) {
            setModal({ ochiq: true, xabar: "Xato javob! Yana bir bor urinib ko'ring.", tur: 'xato' })
            return
        }

        keyingiSavol()
    }

    function modalniYopish() {
        const tur = modal.tur
        setModal({ ochiq: false, xabar: '', tur: '' })
        if (tur === 'vaqt') {
            keyingiSavol()
        }
    }

    if (sozlar.length === 0) {
        return <h1 style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>Ma'lumot yo'q</h1>
    }

    if (tugadi) {
        return (
            <section className="section4">
                <div className="test-card">
                    <h1 className='end-title'>Barcha testlar tugadi!</h1>
                    <button className="next-btn" onClick={() => {
                        setRaqam(0)
                        setTugadi(false)
                    }}>
                        Qaytadan boshlash
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section className="section4">
            <div className="test-card">
                <div className="timer">{vaqt}</div>
                <h3>{raqam + 1} / {sozlar.length}</h3>
                <h1>{sozlar[raqam].ozbekcha}</h1>

                <div className="options">
                    {variantlar.map((variant, i) => (
                        <button
                            key={i}
                            className="option-btn"
                            onClick={() => javobBerish(variant)}
                        >
                            {variant}
                        </button>
                    ))}
                </div>
            </div>

            {modal.ochiq && (
                <div className="modal-overlay" onClick={modalniYopish}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <p className="modal-xabar">{modal.xabar}</p>
                        <button className="modal-btn" onClick={modalniYopish}>OK</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Test
