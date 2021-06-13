import 'src/styles/App.scss';
import Navbar from 'src/components/layout/Navbar';
import { HomePage } from 'src/pages/pageListAsync';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
