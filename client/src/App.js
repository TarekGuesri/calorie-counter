import './styles/App.scss';
import Navbar from 'src/components/layout/Navbar';
import { HomePage } from 'src/pages/pageListAsync';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
