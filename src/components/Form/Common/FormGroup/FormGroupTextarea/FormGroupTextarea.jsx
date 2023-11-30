import classNames from "classnames";
import PropTypes from "prop-types";
import {useContext} from "react";
import {FormGroupIdContext} from "../FormGroupIdContext.js";

const FormGroupTextarea = ({name, onChange, value, isInvalid, rows}) => {
    const groupId = useContext(FormGroupIdContext);
    return (
        <textarea
            id={groupId}
            name={name}
            onChange={onChange}
            value={value}
            className={classNames("border-2 px-2 py-1", {'border-red-200': isInvalid})}
            rows={rows}>
    </textarea>
    )
}

FormGroupTextarea.defaultProps = {
    rows: 7
}

FormGroupTextarea.propTypes = {
    isInvalid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    rows: PropTypes.number
}

export {FormGroupTextarea}