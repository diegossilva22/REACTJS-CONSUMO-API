import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <h1>Sistema de Escolar</h1>
            <nav>
                <Link to='/'>Home</Link>
                <LInk to= '/cadastro'>Cadastrar</LInk>
                <Link to= "/lista">Listar</Link>
            </nav>
        </header>
    )
}   