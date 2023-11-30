import PropTypes from "prop-types";
import {FormGroup} from "../Common/FormGroup/FormGroup.jsx";
import {FormGroupError} from "../Common/FormGroup/FormGroupError/FormGroupError.jsx";
import {FormGroupTextarea} from "../Common/FormGroup/FormGroupTextarea/FormGroupTextarea.jsx";
import {FormGroupLabel} from "../Common/FormGroup/FormGroupLabel/FormGroupLabel.jsx";

const FormTextarea = ({onChange, value, name, label, rows, validation}) => {
    return (
        <FormGroup>
            <FormGroupLabel label={label}/>
            <FormGroupTextarea
                name={name}
                onChange={onChange}
                value={value}
                rows={rows}
                isInvalid={validation.error}
            />
            <FormGroupError
                message={validation.message}
                display={validation.error}
            />
        </FormGroup>
    )
};

FormTextarea.defaultpProps = {
    rows: 7
}

FormTextarea.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rows: PropTypes.number,
    validation: PropTypes.shape({
            "error": PropTypes.bool,
            "message": PropTypes.string
        }
    )
}

export {FormTextarea}