import { useState, useEffect } from 'react';
import './App.css';

const STAGES = [
  {
    id: 'lint',
    label: 'Lint',
    icon: '🔍',
    tooltip: 'ESLint ---Test DEMO --- checks code for style errors and potential bugs.',
  },
  {
    id: 'tests',
    label: 'Tests',
    icon: '🧪',
    tooltip: 'Jest runs unit tests and generates a coverage report.',
  },
  {
    id: 'build',
    label: 'Build',
    icon: '🏗️',
    tooltip: 'Vite compiles the React app into optimised static assets.',
  },
  {
    id: 'sonarcloud',
    label: 'SonarCloud',
    icon: '☁️',
    tooltip: 'SonarCloud scans for code smells, vulnerabilities, and coverage.',
  },
  {
    id: 'staging',
    label: 'Staging',
    icon: '🚀',
    tooltip: 'The build is deployed to the Render staging environment.',
  },
  {
    id: 'approval',
    label: 'Approval',
    icon: '🔐',
    tooltip: 'A human reviewer must approve before the production deploy.',
  },
  {
    id: 'production',
    label: 'Production',
    icon: '🌐',
    tooltip: 'Approved build is deployed live to the production environment.',
  },
];

const STATUS_MESSAGES = [
  'All checks passed ✅',
  'Deploying to staging...',
  'Awaiting approval 🔐',
  'Live in production 🚀',
];

function PipelineNode({ stage }) {
  return (
    <div className="node" data-testid="pipeline-node">
      <span className="node-icon">{stage.icon}</span>
      <span className="node-label">{stage.label}</span>
      <div className="tooltip">{stage.tooltip}</div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="arrow">
      <div className="arrow-line" />
      <div className="arrow-head" />
    </div>
  );
}

export default function App() {
  const [statusIndex, setStatusIndex] = useState(0);
  const [statusKey, setStatusKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length);
      setStatusKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="app">
      <section className="hero">
        <h1 className="hero-title">CI/CD Pipeline Demo</h1>
        <p className="hero-subtitle">
          A live DevOps dashboard showing every stage from code to production
        </p>
      </section>

      <section className="pipeline-section">
        <p className="pipeline-heading">Pipeline stages</p>
        <div className="pipeline">
          {STAGES.map((stage, index) => (
            <div key={stage.id} className="node-wrapper">
              <PipelineNode stage={stage} />
              {index < STAGES.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </section>

      <div className="status-banner">
        <div className="status-label">Pipeline status</div>
        <div className="status-message" key={statusKey}>
          {STATUS_MESSAGES[statusIndex]}
        </div>
        <div className="status-bar" key={`bar-${statusKey}`} />
      </div>
    </main>
  );
}
