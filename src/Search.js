import React, { useState } from 'react'

const Search = ({ filterNames }) => {
    const [input, setInput] = useState('')

    const handleChange = (q) => {
        setInput(q)
        filterNames(q)
    }

    const clearFields = (e) => {
        e.preventDefault()
        setInput('')
    }

    return (
        <section className="search">
            <form onSubmit={clearFields}>
                <input 
                    type="text"
                    value={input}
                    className="form-control"
                    placeholder="Choose Your Fighter"
                    onChange={(e)=>handleChange(e.target.value)}
                    autoFocus/>
            </form>
        </section>
    )
}

export default Search
