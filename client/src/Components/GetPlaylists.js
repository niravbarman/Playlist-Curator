import React from 'react'

export default function GetPlaylists() {

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
        <div>GetPlaylists</div>
    )
}
