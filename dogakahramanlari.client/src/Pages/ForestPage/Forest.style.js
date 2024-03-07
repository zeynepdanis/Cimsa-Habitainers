import styled from '@emotion/styled';


export const Wrapper = styled.div`
    background-color: black;
    
    .button-container {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        gap: 40px;
        margin-top: 200px;
        .button {
            background-color: transparent;
            padding: 15px;
            font-weight: bold;
            position: relative;
            .text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
`;