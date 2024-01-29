// App.jsx
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage';
import PageLayout from './Layouts/PagesLayout/PageLayout'
import ProfilePage from './pages/ProfilePage/ProfilePage';



function App() {
  return (
    <PageLayout>
      <Routes>
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/:username' element={<ProfilePage />} />

    </Routes>
    </PageLayout>
  
  );
}

export default App;
