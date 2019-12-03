import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import iconClose from '../../images/close.svg';

import './Popup.css';

const BtnClose = ({ onClick }) => (
  <button
    type="button"
    className="BtnClose"
    onClick={onClick}
  >
    <img src={iconClose} />
  </button>
);

BtnClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Modal = ({ children, close }) => (
  ReactDOM.createPortal(
    <div className="Popup popup-overlay" onClick={close}>
      <div className={classNames('popup-content')} onClick={(e) => { e.stopPropagation(); }}>
        <div className="btn-cont">
          <BtnClose onClick={close} />
        </div>
        <div className="children">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  )
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

const Popup = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);
  const close = () => { setOpen(false); };

  return (
    <>
      {React.cloneElement(trigger, { onClick: () => { setOpen(!open); } })}
      {open && <Modal close={close}>{children}</Modal>}
    </>
  );
};

Popup.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
