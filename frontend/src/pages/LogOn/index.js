import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './style.css'
import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongID', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch(err) {
            alert('ERRO!!!\nNão foi possível efetuar o login, tente novamente.')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>                    
                    <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Seu ID"/>
                    
                    <button className="button" type="submit">ENTRAR</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/> Não possuo cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}
