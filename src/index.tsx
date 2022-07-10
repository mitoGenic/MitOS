import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { registerTheme } from '@theme'
import reportWebVitals from '@/reportWebVitals'
import App from '@/App'
import '@styles/clean.css'

registerTheme()

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
    <Suspense fallback={<h1>Loading...</h1>}>
        <App />
    </Suspense>,
)

reportWebVitals()
