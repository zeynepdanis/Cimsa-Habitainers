import styled from '@emotion/styled';


export const HomeWrapper = styled.div`
    .home-container {
        padding: 20px 30px;
        border-radius: 10px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50% , -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .header{
        padding: 20px 30px;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50% , -50%);
        font-size: 60px;
        color: #1F8A70;
        font-weight: bold;
        font-style: italic;
    }
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