import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { deactivateLogin } from "../../store/loginModal";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LoginModal = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  let subtitle;
  const onclick = () => {
    dispatch(deactivateLogin());
  };
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  return (
    <>
      <div className="LoginForm">
        <Modal
          isOpen={loginState}
          onRequestClose={onclick}
          contentLabel="Login"
          style={customStyles}
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={onclick}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    </>
  );
};
export default LoginModal;
