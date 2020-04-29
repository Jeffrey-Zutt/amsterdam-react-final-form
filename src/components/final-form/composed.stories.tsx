import React from 'react';
import TextField from "./TextField/TextField";
import SelectField from "./SelectField/SelectField";
import Checkboxes from "./Checkboxes/Checkboxes";

export default {
  title: 'Complete form',
};

export const Example = () => <>
  <h1>Pet</h1>
  <TextField name='pet.firstName' label='First name' />
  <TextField name='pet.surname' label='Surname' />
  <TextField name='pet.age' label='Age' />
  <h1>Pizza</h1>
  <SelectField name='pizza.crust' options={{ 'thick': 'Thick crust', 'thin': 'Thin crust' }} label='Crust' />
  <Checkboxes name='pizza.toppings' options={{ 'tomato': 'Tomato', 'cheese': 'Cheese', 'ham': 'Ham', 'pineapple': 'Pineapple' }} label='Toppings' />
</>

