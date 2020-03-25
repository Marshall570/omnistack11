import React, { useState } from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './style.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    
    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()
        const data = { name, email, whatsapp, city, uf }

        try{
            const response = await api.post('ongs', data)
            alert(`Cadastro efetuado com sucesso!\nSeu ID de acesso é: ${response.data.id}`)
            history.push('/')
        } catch (err) {
            alert('ERRO!!!\nNão foi possível efetuar o cadastro, tente novamente.')
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="HEROES"/>
                    <h1>Cadastro</h1>
                    <p>Faça o cadastro e encontre heróis para a sua ONG</p>
                
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/> Voltar para tela de Login
                    </Link>
                </section>
                
                <form onSubmit={handleRegister}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ONG"/>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"/>
                    <input type="text" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="WhatsApp"/>

                    <div className="input-group">
                        <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
                        <input type="text" value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit"> CADASTRAR ONG</button>
                </form>
            </div>
        </div>
    )
}
