import { Form } from "./style"
import { Container } from "../../styles/GlobalStyle"
import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
export const EntrarCadastro = () => {
    const { signIn } = useContext(AuthContext)

    const [ email, setEmail ] = useState('')
    const [ passwordHash, setPasswordHash ] = useState('')

    async function authenticate(event: React.FormEvent) {
        event.preventDefault();
        await signIn({ email, passwordHash });
    }

    return (
        <>
            <Container>
                <Form className="form-container" onSubmit={authenticate}>
                    <div className="entrar">
                        <h1>Entrar</h1>

                        <label htmlFor="name">Nome de usuário ou e-mail</label>
                        <input className="input" id="name" name="name" placeholder="e-mail@email.com" onChange={(e) => setEmail(e.target.value)} />

                        <br></br>

                        <label htmlFor="senha">Senha</label>
                        <input className="input" id="senha" name="senha" placeholder="" type="password" onChange={(e) => setPasswordHash(e.target.value)} />

                        <div className="checkbox-container">
                            <input type="checkbox" id="manter" />
                            <label htmlFor="manter">Manter conectado</label>
                        </div>

                        <a href="#" className="forgot-password">Recupere sua senha</a>

                        <button type="submit">Entrar</button>
                    </div>

                    <div className="cadastro">
                        <h1>Cadastrar-se</h1>

                        <label htmlFor="name">Nome de usuário ou e-mail</label>
                        <input className="input" id="name" name="name" placeholder="e-mail@email.com" />

                        <br></br>

                        <label htmlFor="senha">Senha</label>
                        <input className="input" id="senha" name="senha" placeholder="" />

                        <p>Seus dados pessoais serão usados para aprimorar sua experiêncianeste no site, para gerenciar o acesso a sua conta e para outros propósitos, como descritos em nossa política de privacidade</p>

                        <button type="submit">Cadastrar-se</button>
                    </div>

                </Form>
            </Container>
        </>
    )
}