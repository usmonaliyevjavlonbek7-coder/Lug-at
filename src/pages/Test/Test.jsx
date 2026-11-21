import React, { useState, useEffect } from 'react'
import './Test.css'

function Test({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState("")
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        if (currentIndex < data.length) {
            const correct = data[currentIndex].english
            let list = [correct]

            while (list.length < 3 && list.length < data.length) {
                let randomNumber = Math.floor(Math.random() * data.length)
                let randomWord = data[randomNumber].english

                if (!list.includes(randomWord)) {
                    list.push(randomWord)
                }
            }

            list.sort(() => Math.random() - 0.5)
            setOptions(list)
            setSelected("")
        }
    }, [currentIndex, data])

    function handleNext() {
        if (selected === "") {
            alert("Iltimos, variantni tanlang!")
            return
        }

        if (selected !== data[currentIndex].english) {
            alert("Xato javob! Yana bir bor urinib ko'ring.")
            return
        }

        if (currentIndex === data.length - 1) {
            setIsFinished(true)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    if (data.length === 0) {
        return <h1 style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>Ma'lumot yo'q</h1>
    }

    if (isFinished) {
        return (
            <section className="section4">
                <div className="test-card">
                    <h1 className='end-title'>Barcha testlar tugadi!</h1>
                    <button className="next-btn" onClick={() => {
                        setCurrentIndex(0)
                        setIsFinished(false)
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
                <h3>{currentIndex + 1} / {data.length}</h3>
                <h1>{data[currentIndex].uzbek}</h1>

                <div className="options">
                    {options.map((opt, index) => (
                        <button
                            key={index}
                            className={selected === opt ? "option-btn active" : "option-btn"}
                            onClick={() => setSelected(opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                <button className="next-btn" onClick={handleNext}>
                    {currentIndex === data.length - 1 ? "Tugatish" : "Davom etish"}
                </button>
            </div>
        </section>
    )
}

export default Test