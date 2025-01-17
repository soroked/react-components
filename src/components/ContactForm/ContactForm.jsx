import { Component } from "react";
import css from "./ContactForm.module.css";
import FloatingInput from "../FloatingInput/FloatingInput";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onChangeFrom = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitContact = (e) => {
    e.preventDefault();

    this.props.handleSubmitContact(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={css.formGroup} onSubmit={this.handleSubmitContact}>
        <FloatingInput
          type="text"
          id="name"
          name="name"
          placeholder=" "
          required={true}
          value={this.state.name}
          onChange={this.onChangeFrom}
          htmlFor="name"
          labelName="Name"
        />
        <FloatingInput
          type="tel"
          id="number"
          name="number"
          placeholder=" "
          required={true}
          value={this.state.number}
          onChange={this.onChangeFrom}
          htmlFor="number"
          labelName="Number"
        />
        <button className={css.formAddContactButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
