import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

type Props = {
  title: string;
};

export default function Todo({ title }: Props) {
  const [showModal, openCloseModal] = useState<boolean>(false);
  const deleteHandler = () => {
    openCloseModal(true);
  };

  const closeModal = () => {
    openCloseModal(false);
  };

  return (
    <Fragment>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <span>A Span</span>
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Modal closeModal={closeModal} />}
      {showModal && <Backdrop closeModal={closeModal} />}
    </Fragment>
  );
}
