// App.jsx
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage';
import PageLayout from './Layouts/PagesLayout/PageLayout'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Create from './components/Create/Create';



function App() {
  return (
    <PageLayout>
      <Routes>
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/:username' element={<ProfilePage />} />
      <Route path='/:post' element={<Create />} />


    </Routes>
    </PageLayout>
  
  );
}

export default App;
