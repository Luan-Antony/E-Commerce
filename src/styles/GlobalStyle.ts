import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: black;
        color: white;
        height: 100vh;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
`

export const Container = styled.div`
    max-width: 1450px;
    margin: 0 auto;
    padding: 0 2rem;
`
