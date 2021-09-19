import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Card} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navibar from './components/navibar/Navibar';
import Home from './components/Home';
import Blog from './blog/Blog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Card style={{backgroundColor: 'transparent'}}>
      <Router>
        <Navibar />
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
        <Footer />
      </Router>
    </Card>
  );
}

export default App;
