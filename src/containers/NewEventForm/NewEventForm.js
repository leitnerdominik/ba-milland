import React, { Component } from "react";

import Input from "../../components/Input/Input";

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
        place: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Ort"
          },
          value: "",
          validation: {
            required: false
          },
          valid: false,
          touched: false
        },
        verein: {
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
          valid: true
        },
        date_from: {
          elementType: "input",
          elementConfig: {
            type: "date",
            placeholder: "Datum von (TT/MM/JJJJ)"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        date_until: {
          elementType: "input",
          elementConfig: {
            type: "date",
            placeholder: "Datum bis (TT/MM/JJJJ)"
          },
          value: "",
          validation: {
            required: false
          },
          valid: false,
          touched: false
        },
        time_from: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Zeit von"
          },
          value: "",
          validation: {
            required: false
          },
          valid: false,
          touched: false
        },
        time_until: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Zeit bis"
          },
          value: "",
          validation: {
            required: false
          },
          valid: false,
          touched: false
        }
      },
      formIsValid: false
    };
  }

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
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            touched={formElement.config.touched}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            /* changed={} */
          />
        ))}
      </form>
    );

    return (
      <div>
        <h1>Neue Veranstaltung eintragen</h1>
        {form}
      </div>
    );
  }
}

export default NewEventForm;
