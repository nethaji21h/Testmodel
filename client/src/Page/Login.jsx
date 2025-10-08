
import React, { useState } from "react"
import "./Login.css"

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    mobilenumber: "",
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.mobilenumber) {
      setError("Please fill in all fields")
      return
    }

    if (!/^[0-9]{10}$/.test(formData.mobilenumber)) {
      setError("Enter a valid 10-digit mobile number")
      return
    }

    console.log("Login details:", formData)
    alert(`Welcome, ${formData.name}! Login successful.`)

    setFormData({ name: "", mobilenumber: "" })
    setError("")
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobilenumber"
            placeholder="Enter your mobile number"
            value={formData.mobilenumber}
            onChange={handleChange}
            maxLength="10"
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
