import React, { Component } from "react";

class NewEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Dein Name"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Deine E-Mail"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        title: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Title"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        
      }
    };
  }
}
