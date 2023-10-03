import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Auth0Provider
            domain="dev-7fkeu02ef45va3vu.us.auth0.com"
            clientId="RHkodP8Mr4a8Cj5Fyvm7UvIjPjB2v7KI"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}

        >
            <App />

        </Auth0Provider>
    </BrowserRouter>
)
