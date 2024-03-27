import styled from "@emotion/styled";

export const TasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
        .home-icon {
            background-color: transparent;
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
        height: 650px;
        font-weight: bold;
        max-height: 600px;
        overflow: scroll;
        .task-head {
            display: flex;
            justify-content: center;
            font-size: 28px;
            color: #1D647E;
            gap: 200px;
            padding: 30px;
            border-bottom: 1px solid #000000;
            .daily-task {
                display: flex;
                .task-header {
                    
                }
            }
            .line {
                position: absolute;
                border-left: 1px solid #000000;
                height: 450px;
            }
        }
        .task-part {
            display: flex;
            justify-content: center;
            font-size: 20px;
            color: #1D4A7E;
            width: 900px;
            padding: 10px;
            font-weight: 400;
            font-style: italic;
            .daily-task-container {
                flex:1;
                .task-row {
                    display: flex;
                    align-items: start;
                    gap: 10px;
                    padding: 15px;
                }
            }
            .weekly-task-container {
                flex:1;
                .task-row {
                    display: flex;
                    align-items: start;
                    gap: 10px;
                    padding: 15px;
                }
                .modal {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding: 20px;
                    width:500px;
                    height: 300px;
                    background: #fffec4;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    z-index: 1000;
                    text-align: center;
                    display: flex;
                    flex: column;
                    justify-content: center;
                }
            }
        }
    }
`;