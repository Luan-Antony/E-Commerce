import styled from "styled-components"

export const Content = styled.header`
    border-bottom: 1px solid #6528D3;

    padding-block: 20px;
    margin-bottom: 80px;

    div {
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            nav ul {
                display: flex;
                gap: 40px;
            }

            div {
                display: flex;
                gap: 1rem;

                a:first-child {
                    padding: 1rem 2rem;
                    background-color: #6528D3;
                    border-radius: 4px;
                }
            }
        }
    }
`
