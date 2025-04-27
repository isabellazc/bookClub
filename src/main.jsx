import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './routes/Layout.jsx'
import './index.css'
import App from './App.jsx'
import CreatePost from './pages/CreatePost.jsx'
import EditPost from './pages/EditPost.jsx'
import ReadPost from './pages/ReadPost.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}> 
          <Route index={true}  element={<App />} />
          <Route path="/read" element={<ReadPost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
