import { Component } from 'react';

import * as s from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormSumbit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const formData = { name, number: Number(number) };
    this.props.handleAddProfile(formData);

    this.reset();
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <s.Form onSubmit={this.handleFormSumbit}>
        <s.Label>
          <span>Name:</span>
          <s.Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </s.Label>
        <s.Label>
          <span>Number:</span>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={e => this.setState({ number: e.target.value })}
            required
          />
        </s.Label>
        <s.Button type="submit">Add contact</s.Button>
      </s.Form>
    );
  }
}
