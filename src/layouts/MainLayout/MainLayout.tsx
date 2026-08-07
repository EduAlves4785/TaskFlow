import { Outlet } from 'react-router-dom';

export default function MainLayout() {
   return (
      <div>
         <header>
            <h1>TaskFlow</h1>
         </header>
         <main>
            <Outlet />
         </main>
      </div>
   ); 
}