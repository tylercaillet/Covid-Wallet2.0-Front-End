import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth';
import axios from 'axios'
import NavBar from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import DocumentDetails from './pages/DocumentDetails'
import About from './pages/About'


const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [documentList, setDocumentList] = useState([])

  const getFeed = async () => {
    const res = await axios.get(`${BASE_URL}/feed`)
    console.log(res.data)
    setDocumentList(res.data)
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    getFeed()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <NavBar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Feed
                user={user}
                authenticated={authenticated}
                documentList={documentList}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/usersdocuments/:user_id"
            element={<UserDocuments user={user} authenticated={authenticated} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/:document_id" element={<DocumentDetails user={user} />} />
          <Route path="/listings" element={<MyListings user={user} />} />
          <Route
            path="/listings/update/:document_id"
            element={<UpdateListing user={user} />}
          />
          <Route
            path="/listings/create"
            element={<CreateListings user={user} />}
          />
        </Routes>
      </main>
      <header className="App-header">
        <p></p>
      </header>
    </div>
  )
}

export default App