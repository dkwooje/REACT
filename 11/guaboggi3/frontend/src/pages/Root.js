import MainNavigation from '../components/MainNavigation';
import { Outlet, useLoaderData } from 'react-router-dom';


function RootLayout(){
    const events= useLoaderData();
    console.log(events);

        return(
            <>
                <MainNavigation/>
                <main>
                <Outlet />
                </main>
            </>
        );
}

export default RootLayout;