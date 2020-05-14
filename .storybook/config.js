import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { GlobalStyle, ThemeProvider, themeColor } from '@datapunt/asc-ui'
import { action } from '@storybook/addon-actions'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import styled from "styled-components";

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.(tsx)$/)

const extendedTheme = {
  globalStyle: `
  `,
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
  return (
    <ThemeProvider overrides={extendedTheme}>
    <>
    <GlobalStyle />
    <Form
      onSubmit={action('submit')}
      mutators={{
        ...arrayMutators
      }}
      render={({ values }) => <>
        <Wrapper>
          {storyFn()}
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
