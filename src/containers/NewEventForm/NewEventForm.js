import React, { Component } from "react";

import Input from "../../components/Input/Input";

import classes from "./NewEventForm.module.css";

class NewEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: {
          label: "Name",
          elementType: "input",
          elementConfig: {
            type: "text"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        email: {
          label: "E-Mail",
          elementType: "input",
          elementConfig: {
            type: "email"
          },
          value: "",
          validation: {
            isEmail: true,
            required: true
          },
          valid: false,
          touched: false
        },
        title: {
          label: "Title",
          elementType: "input",
          elementConfig: {
            type: "text"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        place: {
          label: "Ort",
          elementType: "input",
          elementConfig: {
            type: "text"
          },
          value: "",
          validation: {
            required: false
          },
          valid: false,
          touched: false
        },
        verein: {
          label: "Verein",
          elementType: "select",
          elementConfig: {
            options: [
              { value: "Bildungsausschuss" },
              { value: "Chronik" },
              { value: "Frauenbewegung" },
              { value: "Frauenchor" },
              { value: "Freiwillige Feuerwehr" },
              { value: "Kigo" },
              { value: "Krippenfreunde" },
              { value: "KVW" },
              { value: "Mize" },
              { value: "Musikkapelle" },
              { value: "Seniorenklub" },
              { value: "SVP" },
              { value: "Vereinsgemeinschaft" },
              { value: "Volkstanzgruppe" }
            ]
          },
          value: "Bildungsausschuss",
          validation: {
            required: true
          },
          valid: true
        },
        date_from: {
          label: "Datum von",
          elementType: "date",
          elementConfig: {
            placeholderText: "TT/MM/JJJJ"
          },
          value: null,
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        date_until: {
          label: "Datum bis",
          elementType: "date",
          elementConfig: {
            placeholderText: "TT/MM/JJJJ"
          },
          value: null,
          validation: {
            required: false
          },
          valid: false,
          touched: false
        },
        time_from: {
          label: "Zeit von",
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Zeit von"
          },
          value: "",
          validation: {
            isTime: true,
            required: false
          },
          valid: false,
          touched: false
        },
        time_until: {
          label: "Zeit bis",
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Zeit bis"
          },
          value: "",
          validation: {
            isTime: true,
            required: false
          },
          valid: false,
          touched: false
        },
        textbody: {
          label: "Text",
          elementType: "textarea",
          elementConfig: {
            rows: 4,
            cols: 50,
          },
          value: "",
          validation: {
            required: false,
          },
          valid: false,
          touched: false,
        }
      },
      formIsValid: false
    };
  }

  checkValidation = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.isEmail) {
      const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = emailPattern.test(value) && isValid;
    }

    if (rules.isTime) {
      const timePattern = /^\d{2}:\d{2}$/;
      isValid = (timePattern.test(value) || value.trim() === "") && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event, formName) => {

    const value = event.target ? event.target.value : event; // if it's not an input element, like date, select
    const updateFormElement = {
      ...this.state.form[formName],
      value
    };

    const updateForm = { ...this.state.form, [formName]: updateFormElement };

    this.setState({
      form: updateForm
    });
  };

  focusOutHandler = (event, formName) => {
    
    const updateFormElement = {
      ...this.state.form[formName],
      touched: true,
      valid: this.checkValidation(
        event.target.value,
        this.state.form[formName].validation
      )
    };

    console.log("Valid: ", this.checkValidation(
      event.target.value,
      this.state.form[formName].validation
    ))

    const updateForm = { ...this.state.form, [formName]: updateFormElement };

    let formIsValid = true;
    for (let key in updateForm) {
      formIsValid = updateForm[key].valid && formIsValid;
    }

    console.log(formIsValid);

    this.setState({
      form: updateForm,
      formIsValid
    });
  };

  render() {
    const formElements = [];
    for (let key in this.state.form) {
      formElements.push({
        config: this.state.form[key],
        id: key
      });
    }

    let form = (
      <form>
        {formElements.map(formElement => (
          <Input
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            touched={formElement.config.touched}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={event => this.inputChangedHandler(event, formElement.id)}
            focusOut={event => this.focusOutHandler(event, formElement.id)}
          />
        ))}
        <button type="submit" disabled={!this.state.formIsValid} className={classes.SendData}>senden</button>
      </form>
    );

    return (
      <div className={classes.EventFormContainer}>
        <h1>Neue Veranstaltung eintragen</h1>
        {form}
      </div>
    );
  }
}

export default NewEventForm;