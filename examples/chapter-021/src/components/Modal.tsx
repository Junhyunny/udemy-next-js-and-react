type Props = {
  closeModal: () => void;
};

export default function Modal({ closeModal }: Props) {
  const cancelHandler = () => {
    closeModal();
  };

  const confirmHandler = () => {
    closeModal();
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}
