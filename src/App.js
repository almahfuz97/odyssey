import logo from './logo.svg';
import './App.css';
import Main from './layouts/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/allRoutes';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
