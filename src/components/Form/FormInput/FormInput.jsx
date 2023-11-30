import React from "react";
import PropTypes from 'prop-types';
import {FormGroup} from "../Common/FormGroup/FormGroup.jsx";
import {FormGroupError} from "../Common/FormGroup/FormGroupError/FormGroupError.jsx";
import {FormGroupInput} from "../Common/FormGroup/FormGroupInput/FormGroupInput.jsx";
import {FormGroupLabel} from "../Common/FormGroup/FormGroupLabel/FormGroupLabel.jsx";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormGroup>
                <FormGroupLabel label={this.props.label}/>
                <FormGroupInput
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    isInvalid={this.props.validation.error}
                />
                <FormGroupError
                    message={this.props.validation.message}
                    display={this.props.validation.error}
                />
            </FormGroup>
        )
    }
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    validation: PropTypes.shape({
            "error": PropTypes.bool.isRequired,
            "message": PropTypes.string
        }
    )
};

export {FormInput};