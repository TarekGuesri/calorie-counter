import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Navbar from 'src/components/layout/Navbar';
import Footer from 'src/components/layout/Footer';
import Application from './Application';
import { HomePage, RegisterPage, LoginPage } from 'src/pages/pageListAsync';
import PageSpinner from 'src/components/layout/PageSpinner';
import setAuthToken from 'src/utils/setAuthToken';
import { loadUser, logout } from 'src/actions/auth';
import 'src/styles/App.scss';

// Setting Axios' base settings
axios.defaults.baseURL = 'http://localhost:5000/rest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App({ loading, loadUser, logout }) {
  // Before we load the app, we check the auth state in order to display the components according to the authentication of the user
  useEffect(() => {
    // check for token in LocalStorage
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    loadUser();

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) logout();
    });
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={Application} />
      </Switch>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadUser, logout })(App);
