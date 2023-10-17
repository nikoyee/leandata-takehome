import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const GenericModal = ({
  children,
  title,
  onClose,
  isOpen,
  secondaryText,
  onSecondaryClick,
  primaryText,
  onPrimaryClick
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onSecondaryClick}>
          {secondaryText}
        </Button>
        <Button variant="primary" onClick={onPrimaryClick}>
          {primaryText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericModal;
