import React from 'react'
import Desktop from '@components/system/Desktop'
import Taskbar from '@components/system/Taskbar'
import Wallpaper from '@components/system/Wallpaper'

const App: React.FC = () => {
    return (
        <>
            <Wallpaper />
            <Desktop />
            <Taskbar />
        </>
    )
}

export default App
