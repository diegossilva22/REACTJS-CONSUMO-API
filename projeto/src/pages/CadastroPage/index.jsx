import './style.css'

export default function ListaPage() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    async function cadastrar(evento){
        //impede o comportamento padrão do formulário
        evento.preventDefault()

        // validando se os campos estão preenchidos
        try {
            await api.post('/alunos', {nome, email, telefone})
            toast.success('Aluno cadastrado com sucesso!')

            setNome('')
            setEmail('')
            setTelefone('')
        } catch (error) {
            toast.error('Erro ao cadastrar aluno!')
        }
    }
    return (
        <div className="cadastro- page">
            <from onSubmit={cadastrar}>
                <h2>Cadastro de Alunos</h2>
                <label>Nome:</label>
                    <imput 
                    id="campo-nome"
                    type="text"
                    value={nome}
                    onChange={(evento) => setNome(e.target.value)}
                    required
                    />
                <h2>Email:</h2>
                <input 
                    id="campo-email"
                    type="email"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                    required
                />
                <h2>Telefone:</h2>
                <input 
                    id="campo-telefone"
                    type="tel"
                    value={telefone}
                    onChange={(evento) => setTelefone(evento.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </from>
        </div>
    )

}