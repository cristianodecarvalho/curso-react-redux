import './Input.css'
import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                {/* Controlled component: is assigned to a state */}
                <input value={valor} onChange={quandoMudar} />
                {/* Controlled component */}
                <input value={valor} readOnly/>
                {/* Uncontrolled component: is not assgined to a state */}
                <input value={undefined} />
            </div>
        </div>
    )
}