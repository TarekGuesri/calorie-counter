import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, modalRef, handleClose, actions, children }) => {
  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <a href="#" className="text-dark" onClick={handleClose}>
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
