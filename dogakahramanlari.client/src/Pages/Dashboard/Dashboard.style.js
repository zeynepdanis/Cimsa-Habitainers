import styled from '@emotion/styled';

export const DashboardWrapper = styled.div`
    background-image: url("../../assets/jpgs/forest_background_transparency.jpg");
    .dashboard {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        display: flex;
        flex-direction: column;
        gap: 40px;
        .dashboard-container {
            background: rgba(183, 238, 129, 0.82);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            padding: 20px 40px;
            border-radius: 10px;
            color: rgba(48, 92, 4, 0.94);
            font-style: italic;
            font-weight: bold;
            font-size: 28px;
            width: 1000px;
        }
        .button-container {
            background-color: transparent;
            display: flex;
            justify-content: center;
            gap: 100px;
            .dashboard-button {
                border-radius: 60%;
                padding: 40px;
                background-color: rgba(183, 238, 129, 0.94);
                font-weight: 400;
                font-size: 26px;
                font-style: italic;
            }
        }
    }

`;