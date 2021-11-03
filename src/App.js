import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, compose } from 'redux';
import rootReducer from './reducres';
import { Provider } from 'react-redux';
import HotelDetail from './components/detail/HotelDetail';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={HotelDetail} path="/:id" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
