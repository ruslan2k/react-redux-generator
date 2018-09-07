import React from 'react'

const Login1 = ({ match }) => (
  <div>
    <h1>Login 1</h1>
    <h2>Step: {match.params.step}</h2>
  </div>
)

export default Login1
