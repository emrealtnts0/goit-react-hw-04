
import PropTypes from 'prop-types';
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "An error occurred. Please try again later." }) => {
    return (
        <div className={s.errorContainer}>
            <span className={s.errorIcon}>⚠️</span>
            <p className={s.errorText}>{message}</p>
        </div>
    );
}

ErrorMessage.propTypes = {
  message: PropTypes.string
};

export default ErrorMessage;
