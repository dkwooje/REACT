import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';

//http://localhost:5731/product
/*
const routeDefinitions = createRoutesFromElements(      //옛날방식
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/product" element={<ProductsPage />} />
  </Route>
)
const router = createBrowserRouter(routeDefinitions);
*/

const router = createBrowserRouter([    //오늘날방식
  {path: '/', element: <HomePage />},
  {path:'/product', element: <ProductsPage />},
]);





function App() {
  return <RouterProvider router={router} />;
}

export default App;
