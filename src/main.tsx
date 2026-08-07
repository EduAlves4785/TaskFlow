import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import theme from './theme/index.ts'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router-dom';  
import  router  from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode> 
  </ThemeProvider>
)
