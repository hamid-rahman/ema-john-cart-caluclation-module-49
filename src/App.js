import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {path:'/',
    element: <Main></Main>,
    children:[
      {path: '/about',element: <About></About>},
      {path: '/shop',element: <Shop></Shop>},
      {path: '/inventory',element: <Inventory></Inventory>},
      {path: '/orders',element: <Orders></Orders>},

    ]
  }
  ])
 
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
      {/* <Header></Header>
      <Shop></Shop> */}
    </div>
  );
}

export default App;
