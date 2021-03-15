
import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas'
import store from './redux/store';

// function App1() {

//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas))

//     // fetch('http://localhost:3000/db.json').then(resp => resp.json()).then(json => {setPizzas(json.pizzas)})
//   }, [])

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path='/' render={() => <Home items={pizzas} />} exact />
//         <Route path='/cart' component={Cart} exact />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.savePizzas(data.pizzas)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' render={() => <Home items={this.props.items} />} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}
const mapDispatchToProps = dispatch => {
  return {
    savePizzas: (items) => dispatch(setPizzasAction(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
