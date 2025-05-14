import styled from "styled-components"

export const Content = styled.footer`
    background-color: #130234;
    margin-top: 100px;

    .information {
        display: flex;
        justify-content: space-between;
        padding-block: 50px;

        div {
            display: flex;
            flex-direction: column;
            padding: 0 70px;
            gap: 1rem;
        }

        div ul li {
            margin-bottom: 1rem;
            color: #6528D3;
            font-weight: 500;
        }
    }

    .copy {
        text-align: center;
        padding-block: 20px;
        background-color: #6528D3;
    }
`