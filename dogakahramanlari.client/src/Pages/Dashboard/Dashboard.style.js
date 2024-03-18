import styled from '@emotion/styled';

export const DashboardWrapper = styled.div`
    background-image: url("../../assets/jpgs/forest_background_transparency.jpg");
    padding: 40px;
    .dashboard {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin: 30px;
        .dashboard-header {
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translate(-55% , -150px);
            white-space: nowrap;
            font-family: "Seymour One", sans-serif;
            font-style: normal;
            font-size: 20px;
            line-height: normal;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            color: rgba(48, 92, 4, 0.94);
            display: flex;
            align-items: center;
        }
        .dashboard-container {
            background: rgba(160, 174, 242, 0.56);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            padding: 20px 40px;
            border-radius: 10px;
            color: rgba(48, 2, 8, 0.94);
            font-style: italic;
            font-weight: bold;
            font-size: 28px;
            width: 1000px;
            margin-top: 30px;
            position: relative;
            .animal-container {
                position: absolute;
                right: -100px;
            }
        }
        .button-container {
            background-color: transparent;
            display: flex;
            justify-content: center;
            gap: 100px;
            .dashboard-button {
                border-radius: 60%;
                padding: 40px;
                background-color: #7F5539;
                font-weight: bold;
                font-size: 26px;
                font-style: italic;
            }
        }
    }

`;