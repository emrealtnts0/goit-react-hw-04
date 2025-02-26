import Modal from "react-modal";
import PropTypes from "prop-types";
import s from "./ImageModal.module.css"

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            overlayClassName={s.overlay}
            className={s.modal}
        >
            <img src={image} alt="Enlarged view" className={s.img} />
        </Modal>
    )
}
ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
};

export default ImageModal
