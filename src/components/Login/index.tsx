import { Form } from "./style"
import { Container } from "../../styles/GlobalStyle"
export const EntrarCadastro = () => {
    return (
        <>
            <Container>
                <Form className="form-container">
                    <div className="entrar">
                        <h1>Entrar</h1>

                        <label htmlFor="name">Nome de usuário ou e-mail</label>
                        <input className="input" id="name" name="name" placeholder="e-mail@email.com" />

                        <br></br>

                        <label htmlFor="senha">Senha</label>
                        <input className="input" id="senha" name="senha" placeholder="" type="password" />

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