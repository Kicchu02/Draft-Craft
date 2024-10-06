import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import EmptyState from './pages/EmptyState';

function Root() {
  return <EmptyState />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </Router>
  );
}
