import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { ExerciseGeneratorPage } from './pages/exercise-generator/ExerciseGeneratorPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/exercise-generator" element={<ExerciseGeneratorPage />} />
    </Routes>
  );
}

export default App;
