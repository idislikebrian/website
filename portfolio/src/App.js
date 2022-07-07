import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Biography from './components/Biography';
import More from './components/More';
import Works from './components/Works';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bio" element={<Biography />} />
        <Route path="works" element={<Works />} />
        <Route path="more" element={<More />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;