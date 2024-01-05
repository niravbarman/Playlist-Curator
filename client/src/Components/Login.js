import React from 'react'
import { Container } from "react-bootstrap"

export default function Login() {

    const CLIENT_ID = "502fe45471834cac8b83dc331948d7fe"
    const REDIRECT_URI = 'http://localhost:3000/'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = "token"
    const SPACE_DELIM = "%20"
    const SCOPES = ["user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing", "playlist-read-private", "playlist-read-collaborative", "playlist-modify-private", "playlist-modify-public", "user-library-modify", "user-library-read"]
    const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIM)

    const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES_URL_PARAM}`

    return (
        <Container><a className="btn btn-success btn-lg" href={AUTH_URL}>Login to Spotify</a></Container>
    );
}
