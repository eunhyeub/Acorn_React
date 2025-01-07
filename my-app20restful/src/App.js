import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Member from './pages/Member';
import MemberInsertForm from './pages/MemberInsertForm';
import MemberUpdateForm from './pages/MemberUpdateForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Member />} />
        <Route path="/members/new" element={<MemberInsertForm />} /> 
        <Route path="/members/:num/edit" element={<MemberUpdateForm />} /> 
      </Routes>
    </div>
  );
}

export default App;
