import styled from "@emotion/styled";

export const TasksWrapper = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .home-icon {
            background-color: transparent;
            margin-top:50px;
        }
        .button-container {
            display: flex;
            gap: 50px;
            .page-buttons {
                background-color: #FFFEC4;
                color: #1D647E;
                width: 300px;
                height: 100px;
                border-radius: 45%;
                font-size: 30px;
                font-weight: bold;
            }
        }
        .key-number {
            background-color: #B2EA70;
            display: flex;
            align-items: center;
        }
    }
`;