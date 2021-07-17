import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BootstrapModal from 'bootstrap/js/dist/modal';

const Modal = ({ title, modalRef, handleClose, actions, children }) => {
  useEffect(() => {
    window.addEventListener('hide.bs.modal', handleClose);
  }, []);

  const onClose = () => {
    const modalEle = modalRef.current;
    const bsModal = BootstrapModal.getInstance(modalEle);
    bsModal.hide();

    handleClose();
  };
  return (
    <div
      className="modal fade"
      ref={modalRef}
      tabIndex="-1"
      aria-hidden="true"
      data-bs
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <a href="#" className="text-dark" onClick={onClose}>
              <i className="fas fa-times"></i>
            </a>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">{actions}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  modalRef: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  actions: PropTypes.element.isRequired, // The buttons in the modal footer
  children: PropTypes.any,
};

export default Modal;
