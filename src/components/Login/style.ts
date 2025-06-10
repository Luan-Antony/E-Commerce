import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    gap: 4rem;
    justify-content: center;
    margin: 0 auto;

    button {
        background-color: #6528D3;
        padding-block: 16px;
        color: #fff;
        margin-top: 40px;
        border-radius: 4px;
    }

    input {
        width: 100%;
        border: 1px solid #6528D3;
        background-color: #130234;
        padding: 14px 10px;
        border-radius: 4px;
        color: #fff;
    }

    input::placeholder {
        color: #6528D3;
    }

    .entrar, .cadastro {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        padding: 40px;
        box-sizing: border-box;
    }

    .entrar h1, .cadastro h1 {
        margin-bottom: 1rem;
    }

    .entrar .forgot-password {
        margin-top: 1rem;
        color: #6528D3;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        gap: 0.5rem;
    }

    .checkbox-container input[type="checkbox"] {
        display: none;
    }

    .checkbox-container label {
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        color: #fff;
        user-select: none;
    }

    .checkbox-container label::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 16px;
        height: 16px;
        background-color: #130234;
        border: 2px solid #6528D3;
        border-radius: 4px;
        transition: background-color 0.3s, border-color 0.3s;
    }

    .checkbox-container input[type="checkbox"]:checked + label::before {
        background-color: #6528D3;
        border-color: #130234;
    }

    .cadastro p {
        margin-top: 1rem;
        color: #fff;
    }
`
