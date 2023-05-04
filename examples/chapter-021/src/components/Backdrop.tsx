type Props = {
  closeModal: () => void;
};

export default function Backdrop({ closeModal }: Props) {
  return <div className="backdrop" onClick={closeModal} />;
}
