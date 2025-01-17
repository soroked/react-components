import css from './FloatingInput.module.css';

const FloatingInput = ({
  type = 'text',
  id,
  name,
  placeholder,
  required,
  value,
  onChange,
  htmlFor,
  labelName,
}) => (
  <div className={css.floatingLabel}>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
    <label htmlFor={htmlFor}>{labelName}</label>
  </div>
);

export default FloatingInput;
