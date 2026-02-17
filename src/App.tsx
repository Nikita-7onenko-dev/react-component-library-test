import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import { useToast, type ToastPayload } from './context/ToastContext'
import { ToastContainer } from './components/Toast/ToastContainer'
import {SidebarMenu} from './components/SidebarMenu/SidebarMenu'

const items = [
  {
    id: "1",
    title: "Dashboard",
  },
  {
    id: "2",
    title: "Settings",
    children: [
      {
        id: "2-1",
        title: "Profile",
      },
      {
        id: "2-2",
        title: "Security",
        children: [
          { id: "2-2-1", title: "Password" },
          { id: "2-2-2", title: "2FA" },
        ],
      },
    ],
  },
]

function App() {

  const { showToast } = useToast();

  const [toast, setToast] = useState<ToastPayload>({
    message: "Test",
    type: "success",
    duration: 5000,
  });
  const [open, setIsOpen] = useState<boolean>(false);
  
  

  return (
      <main style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        
      }}>
        <h2>Test task trainee frontend developer</h2>
        <Input
          type='text' 
          placeholder='Message for your toast'
          onValueChange={(val) => setToast((prev) => ({ ...prev, message: val }))}
          clearable
        />       
        <Input
          type="number" 
          placeholder='Duration'
          onValueChange={(val) => setToast((prev) => ({ ...prev, duration: Number(val) }))}
          clearable
        />
        <ToastContainer />
        <button onClick={() => showToast(toast)}>
          Create toast
        </button> 
         <button onClick={() => setIsOpen(true)}>
          Open Menu
        </button>
        <SidebarMenu
          isOpen={open}
          onClose={() => setIsOpen(false)}
          items={items}
        />
      </main>
  )
}

export default App
