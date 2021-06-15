import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import 'src/styles/App.scss';
import Navbar from 'src/components/layout/Navbar';
import { HomePage, RegisterPage, LoginPage } from 'src/pages/pageListAsync';

// Setting Axios' base settings
axios.defaults.baseURL = 'http://localhost:5000/rest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
