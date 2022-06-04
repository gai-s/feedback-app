import React from 'react'
import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <h1>This is About page</h1>
      <p>This is a React App to leave a feedback for product or services</p>
      <p>Version: 1.0.0</p>
      <Link to={{
          pathname:'/',
          search: '?sort=name',
          hash: 'hello'
      }}>
        back to homepage</Link>
    </Card>
  )
}

export default AboutPage
