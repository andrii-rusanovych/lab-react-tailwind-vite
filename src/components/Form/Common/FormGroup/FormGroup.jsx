import PropTypes from "prop-types";
import classNames from "classnames";
import {FormGroupIdContext} from './FormGroupIdContext.js';

const FormGroup = ({children, className}) => {
    const formGroupStringId = Math.random().toString();
    return (
        <div className={classNames("flex flex-col max-w-sm gap-1", className)}>
            <FormGroupIdContext.Provider value={formGroupStringId}>
                {children}
            </FormGroupIdContext.Provider>
        </div>
    );
}

FormGroup.defaultProps = {
    className: ''
}

FormGroup.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.element
    ]).isRequired,
    className: PropTypes.string
}

export {FormGroup}