import { useNavigate } from 'react-router-dom';
import { Icon } from './icons/SailIcons';

const STATUS_STYLES = {
  active: 'bg-gradient-to-r from-brand-500 to-brand-700 text-white',
  archived: 'bg-neutral-100 text-neutral-500',
};

function StatusPill({ status }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-label-small-emphasized ${STATUS_STYLES[status] || STATUS_STYLES.archived}`}>
      {status === 'archived' ? 'Archived' : 'Active'}
    </span>
  );
}

export default function PrototypeList({ prototypes }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-bl from-neutral-100 to-brand-0 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-heading-xlarge text-default mb-8">All prototypes</h1>
        <div className="border border-border rounded-lg overflow-hidden mb-6">
          <table className="w-full bg-surface">
            <thead>
              <tr className="border-b border-border bg-offset">
                <th className="py-3 px-4 text-label-small-emphasized text-subdued text-left whitespace-nowrap"></th>
                <th className="py-3 px-4 text-label-small-emphasized text-subdued text-left whitespace-nowrap">STATUS</th>
                <th className="py-3 px-4 text-label-small-emphasized text-subdued text-left">NAME</th>
                <th className="py-3 px-4 text-label-small-emphasized text-subdued text-left">DESCRIPTION</th>
                <th className="py-3 px-2"></th>
              </tr>
            </thead>
            <tbody>
              {prototypes.map((p) => (
                <tr
                  key={p.id}
                  onClick={() => navigate(`/${p.id}`)}
                  className="border-b last:border-b-0 border-border hover:bg-offset transition-colors duration-100 cursor-pointer"
                >
                  <td className="py-4 px-4 text-body-small text-subdued w-1 whitespace-nowrap text-monospace-small">{p.id}</td>
                  <td className="py-4 px-4 w-1 whitespace-nowrap">
                    <StatusPill status={p.status} />
                  </td>
                  <td className="py-4 px-4 text-body-small-emphasized text-default w-1 whitespace-nowrap">{p.name}</td>
                  <td className="py-4 px-4 text-body-small text-subdued">{p.description}</td>
                  <td className="py-4 px-4 w-1">
                    <Icon name="chevronRight" size="xsmall" className="text-icon-subdued" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-start gap-3 mb-6 text-body-small text-default">
          <span>Run <code className="text-monospace-small bg-offset px-1 py-0.5 rounded">npm run create-prototype</code> in terminal to add a new prototype. Or, just ask Claude!</span>
        </div>
      </div>
    </div>
  );
}
