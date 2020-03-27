import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/sessions', {
            email
        });

        console.log(response);

        const { _id } = response.data;

        localStorage.setItem('@cnc/user', _id);

        history.push('/dashboard');
    }

    return (
        <>
            <p>
                Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input type="email" id="email" placeholder="Seu melhor e-mail" onChange={e => setEmail(e.target.value)} />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}