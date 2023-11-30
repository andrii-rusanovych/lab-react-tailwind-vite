import classNames from "classnames";
import PropTypes from "prop-types";
import {useContext} from "react";
import {FormGroupIdContext} from "../FormGroupIdContext.js";

const FormGroupInput = ({isInvalid, type, name, value, onChange}) => {
    const groupId = useContext(FormGroupIdContext);
    return (
    <input className={classNames("border-2 px-2 py-1", {'border-red-200': isInvalid})}
           id={groupId}
           type={type}
           name={name}
           value={value}
           onChange={onChange}
    />
)}

FormGroupInput.defaultProps = {
    type: 'text'
}

FormGroupInput.propTypes = {
    isInvalid: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export { FormGroupInput }