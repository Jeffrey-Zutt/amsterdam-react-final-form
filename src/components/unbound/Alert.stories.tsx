import React from "react"

import Alert from "./Alert"

export default {
  title: "Unbound/Alert"
}

export const ErrorExample = () =>
  <Alert variant="error">
    Donec sed odio dui.
  </Alert>

export const ErrorExampleWithTitle = () =>
  <Alert variant="error" title="Vestibulum id ligula!">
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  </Alert>

export const SuccessExample = () =>
  <Alert variant="success">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </Alert>

export const SuccessExampleWithTitle = () =>
  <Alert variant="success" title='Lorem ipsum solor damet!'>
    Etiam porta sem malesuada magna mollis euismod.
  </Alert>

