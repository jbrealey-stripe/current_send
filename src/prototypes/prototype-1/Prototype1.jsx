import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Dialog from '../../components/Dialog'
import Badge from '../../components/Badge'

const recipients = [
  { name: 'Albert Chin', email: 'albertc@company.com' },
  { name: 'Lulu Siegel', email: 'lulu@sample.com' },
  { name: 'Bianca Silverstein', email: 'bianca@sample.com' },
]

export default function Prototype1() {
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [selectedRecipient, setSelectedRecipient] = useState(null)
  const [amount, setAmount] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    setSent(true)
    setTimeout(() => {
      setShowSendDialog(false)
      setSent(false)
      setSelectedRecipient(null)
      setAmount('')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-6">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">&larr; Back to prototypes</Link>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Send flow — Basic</h1>
            <p className="text-gray-500 mt-1">Simple send money flow.</p>
          </div>
          <Button onClick={() => setShowSendDialog(true)}>Send money</Button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-400">No transactions yet. Click "Send money" to start.</p>
        </div>

        <Dialog
          open={showSendDialog}
          onClose={() => { setShowSendDialog(false); setSelectedRecipient(null); setAmount(''); setSent(false) }}
          title={sent ? 'Sent!' : selectedRecipient ? 'Enter amount' : 'Choose recipient'}
          footer={
            !sent && selectedRecipient ? (
              <>
                <Button variant="secondary" onClick={() => setSelectedRecipient(null)}>Back</Button>
                <Button onClick={handleSend} disabled={!amount || parseFloat(amount) <= 0}>Send</Button>
              </>
            ) : null
          }
        >
          {sent ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">&#10003;</div>
              <p className="text-gray-600">
                Sent <span className="font-medium">${parseFloat(amount).toFixed(2)}</span> to{' '}
                <span className="font-medium">{selectedRecipient.name}</span>
              </p>
            </div>
          ) : selectedRecipient ? (
            <div>
              <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-medium text-indigo-600">
                  {selectedRecipient.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{selectedRecipient.name}</p>
                  <p className="text-xs text-gray-500">{selectedRecipient.email}</p>
                </div>
              </div>
              <Input
                label="Amount (USD)"
                placeholder="0.00"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          ) : (
            <div className="space-y-1">
              {recipients.map((r) => (
                <button
                  key={r.email}
                  onClick={() => setSelectedRecipient(r)}
                  className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 text-left transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-medium text-indigo-600">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.email}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </Dialog>
      </div>
    </div>
  )
}
