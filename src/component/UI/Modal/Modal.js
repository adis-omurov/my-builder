
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = ({ show, cancel, children }) => {
    const style = {
        transform: show ? "translateY(0)" : "translateY(-100vh)"
    }
    return (
      <div className={classes.Modal}>
        <Backdrop show={show} click={cancel}  />
        <div className={classes.content} style={style}>
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal