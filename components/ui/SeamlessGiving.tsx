'use client'

import { useState } from 'react'

interface SeamlessGivingProps {
  className?: string
}

export default function SeamlessGiving({ className = '' }: SeamlessGivingProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState('one-time')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Seamlessly redirect to Planning Center with pre-filled data
    const params = new URLSearchParams({
      amount: amount,
      frequency: frequency,
      source: 'website'
    })
    
    // Open in same window for seamless experience
    window.location.href = `https://destinyokc.churchcenter.com/giving?${params.toString()}`
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${className}`}
      >
        Give
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Support Our Mission</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {['25', '50', '100', '250'].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(preset)}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    amount === preset
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Custom amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frequency
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="one-time">One Time</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Support Our Community
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Secure giving powered by Planning Center
        </p>
      </div>
    </div>
  )
}
