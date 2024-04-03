import styled from '@emotion/styled';

export const BackgroundWrapper = styled.div`
    .background {
        size:cover;
        position: center;
        repeat:no-repeat;
        width:100vw;
        height: 100vh;
        &.blur {
            filter: blur(4px)
        }
    }
`;

export const LoginWrapper = styled.div`
    .login-container {
        background-color: rgba(216, 100, 169, 0.59);
        padding: 20px 40px;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 50px;
        .input-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
           .header {
                background-color: #A1C298;
                color: #F3FDE8;
                padding: 30px;
                width: 300px;
                margin-top: 20px;
                border-radius: 10px 10px 0 0;
                font-weight: bold;
                font-size: 22px;
           }
           .input-part {
                background-color: #C6EBC5;
                display: flex;
                flex-direction: column;
                gap: 30px;
                width: 300px;
                padding: 30px;
                border-radius: 0 0 10px 10px;
                .input-area {
                    display: flex;
                    align-items: center;
                    gap: 30px;
                    .input {
                        background-color: #F3FDE8;
                        border: none;
                        flex: 1;
                        border-radius: 7px;
                        padding: 25px;
                        color: #757575;
                    }
                }
           }
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
                padding: 20px;
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
`;