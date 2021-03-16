import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Listdelivery from './components/Listdelivery';
import Deliverydetail from './components/Deliverydetail';
import Header from './components/Header';
import Adddelivery from './components/Adddelivery';
import Editdelivery from './components/Editdelivery';
import Footer from './components/Footer';
import Maps from './components/Maps';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route path="/" exact component={Listdelivery} />
          <Route path="/detail/:id" component={Deliverydetail} />
          <Route path="/add" component={Adddelivery} />
          <Route path="/edit/:id" component={Editdelivery} />
          <Route path="/map" component={Maps} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
