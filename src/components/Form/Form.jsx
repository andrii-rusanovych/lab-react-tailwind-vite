import React from "react";
import {FormInput} from "./FormInput/FormInput.jsx";
import {FormTextarea} from "./FormTextarea/FormTextarea.jsx";
import {FormColorInput} from "./FormColorInput/FormColorInput.jsx";
import PropTypes from "prop-types";
import * as EmailValidator from 'email-validator';

const initialState = {
    values: {
        firstName: '',
        lastName: '',
        email: '',
        comment: '',
        color: '#eeffee'
    },
    validation: {
        firstName: {
            error: false,
            message: null
        },
        lastName: {
            error: false,
            message: null
        },
        email: {
            error: false,
            message: null
        },
        comment: {
            error: false,
            message: null
        }
    },
    formIsUnderValidation: false
};


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="max-w-md mx-auto mt-24" noValidate>
                <div className="flex flex-col gap-3">
                    <FormInput
                        name="firstName"
                        label="First name"
                        value={this.state.values.firstName}
                        onChange={this.handleFirstNameChange}
                        validation={this.state.validation.firstName}
                    />
                    <FormInput
                        name="lastName"
                        label="Last name"
                        value={this.state.values.lastName}
                        onChange={this.handleLastNameChange}
                        validation={this.state.validation.lastName}
                    />
                    <FormInput
                        name="email"
                        label="Email"
                        value={this.state.values.email}
                        type='email'
                        onChange={this.handleEmailChange}
                        validation={this.state.validation.email}
                    />
                    <FormTextarea
                        name="comment"
                        label="Comment"
                        value={this.state.values.comment}
                        onChange={this.handleCommentChange}
                        validation={this.state.validation.comment}
                    />
                    <FormColorInput
                        name="color"
                        label="Color"
                        value={this.state.values.color}
                        onChange={this.handleColorChange}
                    />
                </div>
                <button type="submit" className="px-2 py-1 bg-emerald-600 w-32 text-white mt-5">send</button>
            </form>
        )
    }

    onSubmit(e) {
        e.preventDefault();

        const formValues = {
            firstName: this.state.values.firstName,
            lastName: this.state.values.lastName,
            email: this.state.values.email,
            comment: this.state.values.comment,
            color: this.state.values.color,
        };

        //if validation fails, set the form state as "under validation" and stop submission
        if (!this.validate(formValues)) {
            this.setState(prevState => ({
                ...prevState,
                formIsUnderValidation: true
            }));
            return;
        }


        this.props.onSubmit(formValues)

        //clear the form
        this.setState(initialState);
    }

    setFieldValueByName(field, value) {
        this.setState(prevState => ({
            validation: prevState.validation,
            values: {
                ...prevState.values,
                [field]: value
            }
        }));
    }

    handleFirstNameChange(e) {
        const fieldValue = e.target.value;
        this.setFieldValueByName('firstName', fieldValue);
        if (this.state.formIsUnderValidation) {
            this.validateFirstName(fieldValue);
        }
    }

    handleLastNameChange(e) {
        const fieldValue = e.target.value;
        this.setFieldValueByName('lastName', fieldValue);
        if (this.state.formIsUnderValidation) {
            this.validateLastName(fieldValue);
        }
    }

    handleEmailChange(e) {
        const fieldValue = e.target.value;
        this.setFieldValueByName('email', fieldValue);
        if (this.state.formIsUnderValidation) {
            this.validateEmail(fieldValue);
        }
    }

    handleCommentChange(e) {
        const fieldValue = e.target.value;
        this.setFieldValueByName('comment', fieldValue);
        if (this.state.formIsUnderValidation) {
            this.validateComment(fieldValue);
        }
    }

    handleColorChange(e) {
        this.setFieldValueByName('color', e.target.value);
    }

    validateFirstName(firstName) {
        let isFieldValid = true;
        if (!firstName) {
            this.setValidationErrorForField("firstName", {message: "This field is required!", error: true});
            isFieldValid = false;
        } else {
            if (firstName.length <= 2) {
                this.setValidationErrorForField("firstName", {
                    message: "First name must be at least 3 charters long",
                    error: true
                });
                isFieldValid = false;
            } else if (firstName.length >= 50) {
                this.setValidationErrorForField("firstName", {
                    message: "First name cannot be longer then 50 charters",
                    error: true
                });
                isFieldValid = false;
            } else {
                this.setValidationErrorForField("firstName", {message: null, error: false});
                isFieldValid = true;
            }
        }
        return isFieldValid
    }

    validateLastName(lastName) {
        let isFieldValid = true;
        if (!lastName) {
            this.setValidationErrorForField("lastName", {message: "This field is required!", error: true});
            isFieldValid = false;
        } else {
            if (lastName.length <= 2) {
                this.setValidationErrorForField("lastName", {
                    message: "Last name must be at least 3 charters long",
                    error: true
                });
                isFieldValid = false;
            } else if (lastName.length >= 50) {
                this.setValidationErrorForField("lastName", {
                    message: "Last name cannot be longer then 50 charters",
                    error: true
                });
                isFieldValid = false;
            } else {
                this.setValidationErrorForField("lastName", {message: null, error: false});
                isFieldValid = true;
            }
        }
        return isFieldValid;
    }

    validateEmail(email) {
        let isFieldValid = true;
        if (!email) {
            this.setValidationErrorForField("email", {message: "This field is required!", error: true});
            isFieldValid = false;
        } else {
            if (!EmailValidator.validate(email)) {
                this.setValidationErrorForField("email", {
                    message: "Email should be a valid email address",
                    error: true
                });
                isFieldValid = false;
            } else {
                this.setValidationErrorForField("email", {message: null, error: false});
                isFieldValid = true;
            }
        }
        return isFieldValid;
    }

    validateComment(comment) {
        let isFieldValid = true;
        if (!comment) {
            this.setValidationErrorForField("comment", {message: "This field is required!", error: true});
            isFieldValid = false;
        } else {
            if (comment.length <= 2) {
                this.setValidationErrorForField("comment", {
                    message: "Last name must be at least 2 charters long",
                    error: true
                });
                isFieldValid = false;
            } else if (comment.length >= 1000) {
                this.setValidationErrorForField("comment", {
                    message: "Last name cannot be longer then 1000 charters",
                    error: true
                });
                isFieldValid = false;
            } else {
                this.setValidationErrorForField("comment", {message: null, error: false});
                isFieldValid = true;
            }
        }
        return isFieldValid;
    }

    validate(formValues) {
        const isFirstNameFieldValid = this.validateFirstName(formValues.firstName);
        const isLastNameFieldValid = this.validateLastName(formValues.lastName);
        const isEmailFieldValid = this.validateEmail(formValues.email);
        const isCommentFieldValid = this.validateComment(formValues.comment);

        return isFirstNameFieldValid &&
            isLastNameFieldValid &&
            isEmailFieldValid &&
            isCommentFieldValid;
    }

    setValidationErrorForField(field, error) {
        this.setState(prevState => ({
            ...prevState,
            validation: {
                ...prevState.validation,
                [field]: {
                    error: error.error,
                    message: error.message
                }
            }
        }));
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export {Form};