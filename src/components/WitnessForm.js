import React, { useState } from "react"
import { submitWitness } from "../services/apiService"

const WitnessForm = () => {
  const [email, setEmail] = useState("")
  const [identifier, setIdentifier] = useState("")
  const [documentHash, setDocumentHash] = useState("")
  const [comment, setComment] = useState("")
  const [response, setResponse] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = { email, identifier, document_hash: documentHash, comment }
      const result = await submitWitness(data)
      setResponse(result)
    } catch (error) {
      console.error("Error submitting witness:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Witness</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Identifier:</label>
      <input
        type="text"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        required
      />
      <label>Document Hash:</label>
      <input
        type="text"
        value={documentHash}
        onChange={(e) => setDocumentHash(e.target.value)}
        required
      />
      <label>Comment:</label>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </form>
  )
}

export default WitnessForm
