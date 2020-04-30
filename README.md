# Amsterdam react final form

Provides adapters for (form-)components defined in [amsterdam-styled-components](https://github.com/Amsterdam/amsterdam-styled-components/pull/491) to be compatible with [react-final-form](https://github.com/final-form/react-final-form).

## Demo

Please have a look at our storybook! 
- [Simple example](https://jeffrey-zutt.github.io/amsterdam-react-final-form/?path=/story/complete-form--example)
- [Complex data structure example](https://jeffrey-zutt.github.io/amsterdam-react-final-form/?path=/story/complete-form--example-using-complex-fields)

## Goals

- Aims to be as close to the [design system](https://designsystem.amsterdam.nl/) as possible.
- All fields should be able to render a: 
    * Label
    * Input control (`input`, `select`, `textarea`, etc.)
    * Error message 
- All fields should be as wide as their container.
- `react-final-form` should just be a thin layer on top of the components. 

## Usage

```tsx
import React from 'react'
import { Form } from 'react-final-form'

const MyForm:React.FC = () => (
    <Form 
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => {
            <form onSubmit={handleSubmit}>                
                <TextField name='firstname' label='First name' />
                <TextField name='surname' label='Surname' />
                <Button variant='secondary' type='submit' />
            </form>
        }} 
/>
)

```

## Install

Install dependencies:
```
npm i
```

Install peer-dependencies:
```
npm i @datapunt/asc-assets@^0.19.1 @datapunt/asc-ui@^0.19.2-beta.1  objectFitPolyfill@^2.3.0 final-form@^4.19.1 react-final-form@^6.4.0 styled-components@^5.1.0
```


