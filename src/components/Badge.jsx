const colors = {
  gray: 'text-gray-600 bg-gray-50 border-gray-200',
  blue: 'text-blue-600 bg-blue-50 border-blue-200',
  green: 'text-green-600 bg-green-50 border-green-200',
  red: 'text-red-600 bg-red-50 border-red-200',
  indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  orange: 'text-orange-600 bg-orange-50 border-orange-200',
}

export default function Badge({ children, color = 'gray', className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border ${colors[color]} ${className}`}>
      {children}
    </span>
  )
}
