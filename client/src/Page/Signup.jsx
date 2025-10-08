
import React, { useState } from "react"
import { Container, Card, Form, Button } from "react-bootstrap"
import "./Signup.css"

function Signup() {
  const [name, setName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [email, setEmail] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()
    console.log("Signup data:", { name, mobileNumber, email })
    alert(`Signup attempted with ${name}, ${mobileNumber}, ${email}`)
  }

  return (
    <Container className="signup-container">
      <Card className="signup-card">
        <h3>Signup</h3>
        <Form onSubmit={handleSignup}>
          <Form.Group className="form-group">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="signup-btn">
            Signup
          </Button>
        </Form>
      </Card>
    </Container>
  )
}

export default Signup
