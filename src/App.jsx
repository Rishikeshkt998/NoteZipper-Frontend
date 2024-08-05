
import  { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import UserLoggedOut from './components/userloggedout/UserLoggedOut';
import UserLoggedIn from './components/userloggedin/UserLoggedIn';
import Loading from './components/Loading/Loading';


const LoginPage = lazy(() => import('./components/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./components/RegisterPage/RegisterPage'));
const MyNotes = lazy(() => import('./components/MyNotes/MyNotes'));
const SingleNote = lazy(() => import('./components/SingleNote/SingleNote'));
const CreateNote = lazy(() => import('./components/CreateNotes/CreateNote'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path='' element={<UserLoggedOut />}>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
              </Route>
              <Route path='' element={<UserLoggedIn />}>
                <Route path='/mynotes' element={<MyNotes />} />
                <Route path='/createnote' element={<CreateNote />} />
                <Route path='/note/:id' element={<SingleNote />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
