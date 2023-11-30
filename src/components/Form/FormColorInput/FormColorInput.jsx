import PropTypes from "prop-types";

const FormColorInput = ({name, label, value, onChange}) => {
    const inputId = name + Math.random().toString();
    return (
        <div className="flex max-w-sm">
            <label htmlFor={inputId} className="mr-3">{label}</label>
            <input id={inputId} type="color" name={name} value={value} onChange={onChange}/>
        </div>
    );
};

FormColorInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export { FormColorInput }