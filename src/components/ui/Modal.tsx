import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

function Backdrop({ onClick }: { onClick: () => void }) {
  return <div className={classes.backdrop} onClick={onClick} />;
}

function ModalOverlay({ children }: { children: React.ReactNode }) {
  return <div className={classes.modal}>{children}</div>;
}

function Modal({
  children,
  onHideCart,
}: {
  children: React.ReactNode;
  onHideCart: () => void;
}) {
  return (
    <>
      {ReactDOM.createPortal(
        <React.Fragment>
          <Backdrop onClick={onHideCart} />
          <ModalOverlay>{children}</ModalOverlay>
        </React.Fragment>,
        document.getElementById("overlays") as HTMLElement
      )}
    </>
  );
}

export default Modal;
