import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, {loader as eventLoader} from './pages/Events';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

const router = createBrowserRouter([
  {path: '/', 
   element: <RootLayout/>,
    children:[
      {index: true , 
       element: <HomePage/>},
      {
      path: 'events', 
      element: <EventsRootLayout />,
      children: [
      {
       index: true ,
       element: <EventsPage />,
       loader: eventLoader,
     },  //http 리퀘스트를 발생시키는 컴포넌트(데이터를 가져옴), Loader : 렌더링 되기 직전
      {path: ':eventId', element: <EventDetailPage />},
      {path: 'new', element: <NewEventPage/>},
      {path: ':eventId/edit', element: <EditEventPage />} 
      ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

