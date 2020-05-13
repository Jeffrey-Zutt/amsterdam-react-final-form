import React from "react"
import NumberField from "./NumberField/NumberField"
import TextAreaField from "./TextAreaField/TextAreaField"
import TextField from "./TextField/TextField"
import SelectField from "./SelectField/SelectField"
import CheckboxFields from "./CheckboxFields/CheckboxFields"
import RadioFields from "./RadioFields/RadioFields"
import ComplexSelectField from "./SelectField/ComplexSelectField"
import ComplexCheckboxFields from "./CheckboxFields/ComplexCheckboxFields"
import ComplexRadioFields from "./RadioFields/ComplexRadioFields"

export default {
  title: "Complete form"
}

export const Example = () => <>
  <TextField
    name='personal.firstName'
    label='First name'
  />
  <TextField
    name='personal.surname'
    label='Surname'
    validate={() => "This is an example error"}
  />
  <NumberField
    name='personal.age'
    label='Age'
  />
  <SelectField
    name='pizza.crust'
    options={{ "thick": "Thick crust", "thin": "Thin crust" }}
    label='Crust'
  />
  <CheckboxFields
    name='pizza.toppings'
    options={{ "tomato": "Tomato", "cheese": "Cheese", "ham": "Ham", "pineapple": "Pineapple" }}
    label='Toppings'
  />
  <RadioFields
    name='pizza.delivery'
    options={{ "yes": "Yes", "no": "No" }}
    label='Delivery'
    horizontal={true}
  />
  <RadioFields
    name='pizza.payment'
    options={{ "credit": "Credit card", "ideal": "iDeal" }}
    label='Payment method'
  />
  <TextAreaField
    name='pizza.notes'
    label='Notes'
    hint='Leave your delivery man a note'
  />
</>

export const ExampleUsingComplexFields = () => <>
  <p>
    You can also give complex (nested)-data-structures as options:
  </p>
  <ComplexSelectField
    label='Select'
    name='user.select'
    options={[
      { username: "Zutt01", id: "xxx01"  },
      { username: "Vanzee02", id: "xxx02"  }
    ]}
    optionLabelField='username'
  />
  <ComplexCheckboxFields
    label='Complex checkboxes'
    name='user.checkbox'
    options={[
      { username: "Zutt01", id: "xxx01"  },
      { username: "Vanzee02", id: "xxx02"  }
    ]}
    optionLabelField='username'
  />
  <ComplexRadioFields
    label='Complex checkboxes'
    name='user.radio'
    options={[
      { username: "Zutt01", id: "xxx01"  },
      { username: "Vanzee02", id: "xxx02"  }
    ]}
    optionLabelField='username'
  />
</>

