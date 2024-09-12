import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';
import RootLayout from './pages/Root.jsx';
const router = createBrowserRouter([    
  {path:'/',
    element: <RootLayout/>,  //레이아웃을 보여주기 위한 컴포넌트를 넣어줌
    children:[
      {path: '/', element: <HomePage />},
      {path:'/product', element: <ProductsPage />},
    ]
  },
  {
    path:''
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
