import ReactDOM from "react-dom";
import React, { FC, Fragment } from "react";
import { modalActions } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { Button, Card } from "components/UI";
import styled from "styled-components";

const ErrorModal = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.modal.errorMessage);

  const closeModalHandler = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={closeModalHandler} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorMessage={errorMessage}
          onClick={closeModalHandler}
        />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </Fragment>
  );
};

interface ModalOverlayProps {
  errorMessage: string;
  onClick: React.MouseEventHandler;
}

export const ModalOverlay: FC<ModalOverlayProps> = ({
  errorMessage,
  onClick,
}) => {
  return (
    <ErrorModalOverlay>
      <ErrorHeader>
        <h2>에러 발생!</h2>
      </ErrorHeader>

      <Content>{errorMessage}</Content>

      <Actions>
        <Button onClick={onClick}>닫기</Button>
      </Actions>
    </ErrorModalOverlay>
  );
};

export const ErrorModalOverlay = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
`;

export const BackDrop = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

export const ErrorHeader = styled.header`
  background: #4f005f;
  padding: 1rem;

  > h2 {
    margin: 0;
    color: white;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Actions = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
export default ErrorModal;
