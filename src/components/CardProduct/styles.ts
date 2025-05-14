import styled from "styled-components"

export const Container = styled.div`
    > div {
        background-color: #130234;
        padding: 40px 20px;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        p:nth-child(3) {
            align-self: flex-end;
            color: #6BB27C;
        }

        button {
            background-color: #6528D3;
            padding-block: 16px;
            color: #fff;
            border-radius: 4px;
        }
    }
`