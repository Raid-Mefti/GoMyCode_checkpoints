import { useState } from 'react'
import UserCard from './components/User-card'

export default function App() {
  const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("");
const [picture, setPicture] = useState("");

  return(
    <div className="mainDiv">
    <UserCard userName={userName} password={password} role={role} picture={picture}/>
    <form action="" className="form">
          <label htmlFor="">User name</label>
          <input 
            type="text" 
            name="userName"
            placeholder='name'
            value={userName}
            onChange={(event) => {
              setUserName(event.currentTarget.value)
            }}
          />

          <br />
          
          <label htmlFor="">Password</label>
          <input 
            type="password" 
            name="password"
            placeholder='password'
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value)
            }} 
            />         
            <br />

          <label htmlFor="">Role</label>
          <select 
            name="role" 
            id=""
            value={role}  
            onChange={(event) => {
              setRole(event.currentTarget.value)
              if(event.currentTarget.value=="Iguana") setPicture("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRK-UnPiDJW7pKWtVjZFN0HoNjCacDPTb8U4bViIlLQYhcJ0kcwwSR67SigqWYh5gwB8uHbwViCjYQoVQMfjuKzqQ")
              else if(event.currentTarget.value=="Lama") setPicture("https://www.zoologiste.com/images/xl/lama.jpg")
            }} 
          >
            <option value="" disabled selected>Not selected</option>
            <option value="Lama">Lama</option>
            <option value="Iguana">Iguane</option>
          </select>

          <label htmlFor="">Picture URL</label>
          <input 
            type="text" 
            placeholder='URL'
            value={picture}
          />

      </form>
    </div>
  )
}

