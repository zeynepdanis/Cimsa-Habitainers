import styled from '@emotion/styled';


export const HomeWrapper = styled.div`
    .container {
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
        border-radius: 10px;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50% , -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

            font-size: 50px;
            color: black;
        }

        .button-container {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            gap: 40px;
            .back-icon {
                background-color: transparent;
                padding: 0;
            }
            .button {
                background-color: #A1C298;
                padding: 15px;
                font-weight: bold;
            }
        }
    }
`;