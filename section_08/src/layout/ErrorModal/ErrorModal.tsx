import ReactDOM from "react-dom";
import React, { FC, Fragment } from "react";
import { modalActions } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";

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
      <button onClick={onClick}>닫기</button>
    </ErrorModalOverlay>
  );
};

export const ErrorModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
`;
export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export default ErrorModal;
