import React from "react"
import '../style/Login.css'


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b824eb11a849405da56c45f7bf05ff50&response_type=code&redirect_uri=http://localhost:3000/callback&scope=ugc-image-upload%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20playlist-read-collaborative%20playlist-modify-public%20playlist-read-private%20playlist-modify-private%20app-remote-control%20streaming%20user-read-email%20user-read-private%20user-library-modify%20user-library-read"

  export default function Login() {
  return (
      <a href={AUTH_URL}>
     <button className='sign-in'> sign-in </button>
      </a>
  )
}