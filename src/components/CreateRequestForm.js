import React, { useState } from "react"
import { createWitness } from "../services/apiService"

const CreateRequestForm = () => {
  const [email, setEmail] = useState("")
  const [identifier, setIdentifier] = useState("")
  const [documentHash, setDocumentHash] = useState("")
  const [witnessCount, setWitnessCount] = useState(2)
  const [response, setResponse] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = {
        email,
        identifier,
        document_hash: documentHash,
        witnessCount,
      }
      const result = await createWitness(data)
      setResponse(result)
    } catch (error) {
      console.error("Error creating witness:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Witness Request</h2>
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
      <label>Witness Count:</label>
      <input
        type="number"
        value={witnessCount}
        onChange={(e) => setWitnessCount(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </form>
  )
}

export default CreateRequestForm
