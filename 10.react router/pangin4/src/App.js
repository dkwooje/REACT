import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Product.jsx';
import RootLayout from './pages/Root.jsx';
import ProductsDetailPage from './pages/ProductDetail.jsx';
const router = createBrowserRouter([    
  {path:'/',   //절대 경로 , 절대경로를 바꾸면 모든 url 주소값의 / 를 뺴줘야 한다.
    element: <RootLayout/>,  //레이아웃을 보여주기 위한 컴포넌트를 넣어줌
    //errorElement: <ErrorPage />,
    children:[
      { index: true , element: <HomePage />},  //index: 다른 것보다 가장 상위 주소라는 뜻 (path: '' 와 뜻이 같다.)
      { path:'product', element: <ProductsPage />},
      { path: "product/:productId", element:<ProductsDetailPage />}  //product : 경로
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
