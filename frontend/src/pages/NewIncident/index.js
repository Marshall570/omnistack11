import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './style.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongID')

    async function handleNewIncident(e) {
        e.preventDefault()
        const data = { title, description, value }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            alert('Caso cadastrado com sucesso!')
        } catch(err) {
            alert('ERRO!!\nNão foi possível cadastrar o caso, tente novamente.')
        }

    } 

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="HEROES"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso da maneira mais detalhada possível para encontrar um herói disposto à resolve-lo</p>
                
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/> Voltar para tela de principal
                    </Link>
                </section>
                
                <form onSubmit={handleNewIncident}>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Título do caso"/>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição"/>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Valor em Reais"/>

                    <button className="button" type="submit">CADASTRAR CASO</button>
                </form>
            </div>
        </div>
    )
}
