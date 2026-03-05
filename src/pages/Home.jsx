import { Link } from 'react-router-dom'
import Badge from '../components/Badge'

const prototypes = [
  {
    id: 1,
    name: 'Send flow — Basic',
    description: 'Simple send money flow with recipient selection and amount entry.',
    path: '/prototype-1',
    status: 'In progress',
    statusColor: 'indigo',
    updated: 'Mar 1, 2026',
  },
  {
    id: 2,
    name: 'Send flow — With scheduling',
    description: 'Send flow with date scheduling and repeat configuration.',
    path: '/prototype-2',
    status: 'In progress',
    statusColor: 'indigo',
    updated: 'Mar 1, 2026',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Current Send Flow</h1>
        <p className="text-gray-500 mb-8">Prototypes for the send money experience.</p>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-sm font-medium text-gray-500 px-4 py-3">#</th>
                <th className="text-left text-sm font-medium text-gray-500 px-4 py-3">Prototype</th>
                <th className="text-left text-sm font-medium text-gray-500 px-4 py-3">Status</th>
                <th className="text-left text-sm font-medium text-gray-500 px-4 py-3">Updated</th>
              </tr>
            </thead>
            <tbody>
              {prototypes.map((proto) => (
                <tr key={proto.id} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 text-sm text-gray-400">{proto.id}</td>
                  <td className="px-4 py-4">
                    <Link to={proto.path} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                      {proto.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-0.5">{proto.description}</p>
                  </td>
                  <td className="px-4 py-4">
                    <Badge color={proto.statusColor}>{proto.status}</Badge>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">{proto.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
