
import { useState } from 'react'
import './style.css'

import api from '../../services/api'
import { toast } from 'react-toastify'

export default function ListaPage() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    async function cadastrar(evento) {
        evento.preventDefault()

        try {
            await api.post('/alunos', {
                nome,
                email,
                telefone
            })

            toast.success('Aluno cadastrado com sucesso!')

            setNome('')
            setEmail('')
            setTelefone('')

        } catch (error) {
            toast.error('Erro ao cadastrar aluno!')
            console.error(error)
        }
    }

    return (
        <div className="cadastro-page">
            <form onSubmit={cadastrar}>

                <h2>Cadastro de Alunos</h2>

                <label htmlFor="campo-nome">Nome:</label>
                <input
                    id="campo-nome"
                    type="text"
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                    placeholder="Digite seu nome"
                    required
                />

                <label htmlFor="campo-email">Email:</label>
                <input
                    id="campo-email"
                    type="email"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                    placeholder="Digite seu email"
                    required
                />

                <label htmlFor="campo-telefone">Telefone:</label>
                <input
                    id="campo-telefone"
                    type="tel"
                    value={telefone}
                    onChange={(evento) => setTelefone(evento.target.value)}
                    placeholder="Digite seu telefone"
                    required
                />

                <button type="submit">
                    Cadastrar Aluno
                </button>

            </form>
        </div>
    )
}
