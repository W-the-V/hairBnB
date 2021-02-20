import React, { useState } from "react";
import { Modal } from "../../src/context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;
