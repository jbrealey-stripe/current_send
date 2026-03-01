import ComponentExamples from './ComponentExamples';
import { Button } from '../../../components/Button';
import { Icon } from '../../../icons/SailIcons';

export default function Home() {
  return (
    <div className="p-8 space-y-12">
      <div className="max-w-[800px] flex items-center gap-2 p-4 rounded-lg bg-brand-50">
        <Icon name="sparkle" size="small" className="text-brand" />
        <p className="flex-1 text-label-medium text-brand">You can create a new repo on Github using this template.</p>
        <Button
          href="https://github.com/new?template_name=sail-dashboard-starter&template_owner=eliang-stripe"
          target="_blank"
          rel="noopener noreferrer"
          icon="external"
          className="shrink-0"
          variant="primary"
        >
          Use this template
        </Button>
      </div>

      <div>
        <h1 className="text-heading-xlarge text-default mb-2">Home</h1>
        <p className="text-subdued">Edit <code className="text-monospace-small bg-offset px-2 py-1 rounded">src/prototypes/prototype1/pages/Home.jsx</code> to edit this page.</p>
      </div>

      <h1 className="text-heading-large text-default mb-8">Components</h1>

      <ComponentExamples />
    </div>
  );
}
