import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, {loader as eventLoader} from './pages/Events';
import EventDetailPage, {loader as eventDetailLoader} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {path: '/', 
   element: <RootLayout/>,
   errorElement: <ErrorPage />,
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
       errorElement: <ErrorPage />,
       loader: eventLoader,
     }, 
     {
      path: ':eventId',
      id: 'event-detail',
      loader : eventDetailLoader,
      children:[
        { index:true, element: <EventDetailPage />},
        { path: "edit", element: <EditEventPage />},
      ]
     },
      {path: ':eventId', element: <EventDetailPage />, loader : eventDetailLoader},
      {path: 'new', element: <NewEventPage/>, action: ()=>{}},
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

