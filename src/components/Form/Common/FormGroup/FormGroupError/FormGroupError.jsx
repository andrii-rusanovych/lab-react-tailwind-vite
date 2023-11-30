import classNames from "classnames";
import PropTypes from "prop-types";
const FormGroupError = ({message, className, display}) => {
    if (display) {
        return <div className={classNames("text-red-600 text-sm", className)}>{message}</div>;
    }
    return null;
}

FormGroupError.propTypes = {
    message: PropTypes.string,
    className: PropTypes.string,
    display: PropTypes.bool.isRequired
}

export { FormGroupError }