import FloatingInput from "../FloatingInput/FloatingInput";
import css from "./ContactFilter.module.css";

const ContactFilter = ({ value, onChange }) => (
  <div className={css.contactFilter}>
    <FloatingInput
      type="text"
      id="filter"
      name="filter"
      placeholder=" "
      value={value}
      onChange={onChange}
      htmlFor="filter"
      labelName="Name"
    />
  </div>
);

export default ContactFilter;
