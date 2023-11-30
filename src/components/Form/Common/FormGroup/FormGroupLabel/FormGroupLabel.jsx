import PropTypes from "prop-types";
import React, {useContext} from "react";
import {FormGroupIdContext} from "../FormGroupIdContext.js";

const FormGroupLabel = ({label, className}) => {
    const groupId = useContext(FormGroupIdContext);
    return (
        <label htmlFor={groupId} className={className}>{label}</label>
    );
}

FormGroupLabel.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
}

export { FormGroupLabel }