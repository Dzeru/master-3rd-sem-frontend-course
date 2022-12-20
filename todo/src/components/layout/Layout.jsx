import React from 'react'

// Корневой класс, внутри него будет Home и прочие экраны
const Layout = ({ children }) => {
    return (
        <div className='bg-zinc-900 h-screen py-10'>
            {children}
        </div>
    )
}

export default Layout