import React, { useState } from "react"
import { sendEmail } from "../services/apiService"

const MailForm = () => {
  const [recipients, setRecipients] = useState([{ name: "", email: "" }])
  const [documentHash, setDocumentHash] = useState("")
  const [identifier, setIdentifier] = useState("")
  const [response, setResponse] = useState(null)

  const handleRecipientChange = (index, field, value) => {
    const newRecipients = [...recipients]
    newRecipients[index][field] = value
    setRecipients(newRecipients)
  }

  const handleAddRecipient = () => {
    setRecipients([...recipients, { name: "", email: "" }])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = {
        recipient: recipients,
        document_hash: documentHash,
        identifier,
      }
      const result = await sendEmail(data)
      setResponse(result)
    } catch (error) {
      console.error("Error sending email:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send Witness Request via Email</h2>
      {recipients.map((recipient, index) => (
        <div key={index}>
          <label>Name:</label>
          <input
            type="text"
            value={recipient.name}
            onChange={(e) =>
              handleRecipientChange(index, "name", e.target.value)
            }
            required
          />
          <label>Email:</label>
          <input
            type="email"
            value={recipient.email}
            onChange={(e) =>
              handleRecipientChange(index, "email", e.target.value)
            }
            required
          />
        </div>
      ))}
      <button type="button" onClick={handleAddRecipient}>
        Add Recipient
      </button>
      <label>Document Hash:</label>
      <input
        type="text"
        value={documentHash}
        onChange={(e) => setDocumentHash(e.target.value)}
        required
      />
      <label>Identifier:</label>
      <input
        type="text"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </form>
  )
}

export default MailForm
