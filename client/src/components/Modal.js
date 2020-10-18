import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <div class="ui negative button">Delete</div>
          <div className="ui cancel button">Cancel</div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
