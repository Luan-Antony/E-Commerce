import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li img.product {
        width: 100px;
        height: 100px;
    }

    .button {
        padding: 20px;
        background-color: #6528D3;
        border-radius: 4px;
        color: #fff;
    }

    p {
        text-align: center;
    }
`