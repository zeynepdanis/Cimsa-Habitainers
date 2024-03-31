import styled from "@emotion/styled";

export const TasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
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
            border-radius: 10px;
            padding: 15px;
            font-size: 28px;
            font-weight: bold;
            gap: 15px;
            .key-image {
                width: 45px;
            }
        }
    }
    .task-body {
        background-color: #FFFEC4;
        width: 900px;
        border-radius: 15px;
        height: 500px;
        font-weight: bold;
        .task-head {
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #000000;
            font-size: 28px;
            color: #1D647E;
            gap: 200px;
            padding: 30px;
            .line {
                position: absolute;
                border-left: 1px solid #000000;
                height: 450px;
            }
        }
    }
`;