import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
  .background {
    width: 100vw;
    height: 100vh;
    position: relative;
    &.blur {
      filter: blur(4px);
    }
  }
`;

export const RegisterWrapper = styled.div`
  .register-container {
    background-color: rgba(216, 100, 169, 0.59);
    padding: 20px 40px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    .input-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .header {
        text-align: center;
        background-color: #a1c298;
        color: #f3fde8;
        padding: 20px;
        width: 300px;
        margin-top: 20px;
        border-radius: 10px 10px 0 0;
        font-weight: bold;
        font-size: 22px;
      }
      .input-part {
        background-color: #c6ebc5;
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 300px;
        padding: 20px;
        border-radius: 0 0 10px 10px;
        .input-area {
          display: flex;
          align-items: center;
          gap: 15px;
          .input {
            background-color: #f3fde8;
            border: none;
            flex: 1;
            border-radius: 7px;
            padding: 15px;
            color: #757575;
          }
        }
      }
    }
    .button-container {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      gap: 60px;
      .back-icon {
        background-color: transparent;
        padding: 0;
      }
      .button {
        text-align: center;
        background-color: #a1c298;
        padding: 15px;
        font-weight: bold;
      }
    }
  }
`;
