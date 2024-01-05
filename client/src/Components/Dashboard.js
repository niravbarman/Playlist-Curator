import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard({token}) {

  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [playlists, setPlaylists] = useState([])
  
  /*
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
    */

const searchArtists = async (e) => {
  e.preventDefault()
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: searchKey,
      type: "artist"
    }
  })

  console.log(data.artists)
  setArtists(data.artists.items)
}

const renderArtists = () => {
  console.log("Rendering Artists")
  return artists.map(artist => (
      <div key={artist.id}>
          {artist.name}
          {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
      </div>
  ))
}

const getPlaylists = async (e) => {
  const userID = 'niravbarman'
  const url = `https://api.spotify.com/v1/me/playlists?limit=50`
  const {data} = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })

  const playlists = data.items
  console.log(playlists)
  setPlaylists(playlists.filter((playlist) => {
    return playlist.owner.id === userID}))
}

const renderPlaylists = () => {
  console.log("Rendering Playlists")
  return playlists.map(playlist => (
    <a href={playlist.external_urls['spotify']}>
      <div key={playlist.id}>
          {playlist.name}
          {playlist.images.length ? <img width={"70%"} src={playlist.images[0].url} alt=""/> : <div>No Image</div>}
      </div>
    </a>
  ))
}

  return (
    <div>
      <span>
        <button onClick={getPlaylists}>Get Playlists</button>
        {renderPlaylists}
        <form onSubmit={searchArtists}>
              <input type="text" onChange={e => setSearchKey(e.target.value)}/>
              <button type={"submit"}>Search</button>
        </form>
        {renderArtists}
      </span>
    </div>
    
    //<div>Token: {token}</div>
  )
}