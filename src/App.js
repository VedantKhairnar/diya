import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CreateRequestForm from "./components/CreateRequestForm"
import WitnessForm from "./components/WitnessForm"
import MailForm from "./components/MailForm"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes path="/">
          <Route path="/create-request" element={<CreateRequestForm />} />
          <Route path="/submit-witness" element={<WitnessForm />} />
          <Route path="/send-email" element={<MailForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
