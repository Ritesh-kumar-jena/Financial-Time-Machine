
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
   <AuthProvider>
      <BrowserRouter>
         <ChakraProvider>
            <App />
          </ChakraProvider>
      </BrowserRouter>
   </AuthProvider>
    
)
