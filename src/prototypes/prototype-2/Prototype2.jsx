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

export default function Prototype2() {
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [step, setStep] = useState('recipient') // 'recipient' | 'details' | 'confirm' | 'done'
  const [selectedRecipient, setSelectedRecipient] = useState(null)
  const [amount, setAmount] = useState('')
  const [scheduleDate, setScheduleDate] = useState('')

  const reset = () => {
    setStep('recipient')
    setSelectedRecipient(null)
    setAmount('')
    setScheduleDate('')
  }

  const handleConfirm = () => {
    setStep('done')
    setTimeout(() => {
      setShowSendDialog(false)
      reset()
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-6">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">&larr; Back to prototypes</Link>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Send flow — With scheduling</h1>
            <p className="text-gray-500 mt-1">Send flow with date scheduling.</p>
          </div>
          <Button onClick={() => setShowSendDialog(true)}>Send money</Button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-400">No transactions yet. Click "Send money" to start.</p>
        </div>

        <Dialog
          open={showSendDialog}
          onClose={() => { setShowSendDialog(false); reset() }}
          title={
            step === 'done' ? 'Scheduled!' :
            step === 'confirm' ? 'Confirm payout' :
            step === 'details' ? 'Payout details' :
            'Choose recipient'
          }
          footer={
            step === 'details' ? (
              <>
                <Button variant="secondary" onClick={() => setStep('recipient')}>Back</Button>
                <Button onClick={() => setStep('confirm')} disabled={!amount || parseFloat(amount) <= 0 || !scheduleDate}>Continue</Button>
              </>
            ) : step === 'confirm' ? (
              <>
                <Button variant="secondary" onClick={() => setStep('details')}>Back</Button>
                <Button onClick={handleConfirm}>Confirm &amp; schedule</Button>
              </>
            ) : null
          }
        >
          {step === 'done' ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">&#10003;</div>
              <p className="text-gray-600">
                <span className="font-medium">${parseFloat(amount).toFixed(2)}</span> scheduled to{' '}
                <span className="font-medium">{selectedRecipient.name}</span> on{' '}
                <span className="font-medium">{new Date(scheduleDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </p>
            </div>
          ) : step === 'confirm' ? (
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-500">Recipient</span>
                <span className="text-sm font-medium text-gray-900">{selectedRecipient.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-500">Amount</span>
                <span className="text-sm font-medium text-gray-900">${parseFloat(amount).toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-500">Scheduled for</span>
                <span className="text-sm font-medium text-gray-900">
                  {new Date(scheduleDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm text-gray-500">Status</span>
                <Badge color="indigo">Scheduled</Badge>
              </div>
            </div>
          ) : step === 'details' ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
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
              <Input
                label="Schedule date"
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
              />
            </div>
          ) : (
            <div className="space-y-1">
              {recipients.map((r) => (
                <button
                  key={r.email}
                  onClick={() => { setSelectedRecipient(r); setStep('details') }}
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
