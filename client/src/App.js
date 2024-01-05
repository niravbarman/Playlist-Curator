import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

function App() {

  const [token, setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
  
      if(!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  
        window.location.hash = ""
        window.localStorage.setItem("token", token)
        
      }
  
      setToken(token)
  })

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Playlist Curator: Spotify</h1>
        {token ? <Dashboard token={token} />: <Login />}
        <button onClick={logout}>Logout</button>
      </header>
    </div>
  );
}

export default App;


/*
{token ?
          <button onClick={getPlaylists}>Get Playlists</button>
          : <h2>Please Login</h2>
        }

        {renderPlaylists()}

{token ?
          <form onSubmit={searchArtists}>
              <input type="text" onChange={e => setSearchKey(e.target.value)}/>
              <button type={"submit"}>Search</button>
          </form>
          : <h2>Please Login</h2>
        }

        {renderArtists()}
        */