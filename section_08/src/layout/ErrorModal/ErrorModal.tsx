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
        <BackDrop />,
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
      <div>{errorMessage}</div>
      <Button onClick={onClick}>닫기</Button>
    </ErrorModalOverlay>
  );
};

export const ErrorModalOverlay = styled(Card)`
  position: absolute;
  z-index: 100;
  top: 40%;
  left: 42%;
  background-color: #fff;
  color: black;
`;

export const BackDrop = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export default ErrorModal;
