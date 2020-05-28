import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"

import React, { useCallback } from 'react'
import { addDecorator, configure } from '@storybook/react'
import { GlobalStyle, ThemeProvider, themeColor } from '@datapunt/asc-ui'
import { action } from '@storybook/addon-actions'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import styled from "styled-components";

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.(tsx)$/)

const extendedTheme = {
  globalStyle: ''
}

const Wrapper = styled.div`
  margin: 20px; 
`

const Pre = styled.pre`
  margin: 0;
  padding: 20px;
  background-color: ${themeColor('tint', 'level3')}
`

function withGlobalStyles(storyFn) {

  // Mock a submit:
  const handleSubmit = useCallback((...args) => new Promise((resolve) => {
    action('submit')
    console.log("Mock submit...", args)
    setTimeout(() => {
      console.log("...submitted!")
      resolve()
    }, 1000)
  }), [])

  return (
    <ThemeProvider overrides={extendedTheme}>
    <>
    <GlobalStyle />
    <Form
      onSubmit={handleSubmit}
      mutators={{
        ...arrayMutators
      }}
      render={({ values, handleSubmit }) => <>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            {storyFn()}
          </form>
        </Wrapper>
        <Wrapper>
          <Pre>
            // form values:
          </Pre>
          <Pre>
            { JSON.stringify(values, null, 2) }
          </Pre>
        </Wrapper>
      </>} />
    </>
    </ThemeProvider>
)
}

addDecorator(withGlobalStyles)

configure(req, module)
