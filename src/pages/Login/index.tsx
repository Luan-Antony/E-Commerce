import { Container } from "../../styles/GlobalStyle";
import { EntrarCadastro } from "../../components/Login";

export const Login = () => {
    return ( 
        <Container>
            <h1 style={{textAlign: "center", marginBottom: "4rem"}}>Minha conta</h1>
            <EntrarCadastro />
        </Container>
    )
}