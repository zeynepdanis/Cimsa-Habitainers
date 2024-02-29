import styled from '@emotion/styled';

export const DashboardWrapper = styled.div`
    .dashboard {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        display: flex;
        flex-direction: column;
        gap: 40px;
        .dashboard-container {
            background-color: rgba(216, 100, 169, 0.59);
            padding: 20px 40px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
        .button-container {
            background-color: transparent;
            display: flex;
            justify-content: space-between;
            gap: 40px;
            .dashboard-button {
                background-color: rgba(216, 100, 169, 0.80);
                border-radius: 60%;
                padding: 25px;
            }
        }
    }

`;