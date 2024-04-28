import logo from './logo.svg';
import './App.css';
import Layout from './hocs/Layout';
import {Routes, Route} from 'react-router-dom'
import Home from './containers/Home';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}


export default App;
