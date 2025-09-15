import React, { useEffect, useState } from 'react'

function ResizeComponent() {

    const[windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=> {
        const handleResize = ()=> setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return ()=> {
            console.log('Event Listener removed');
            
            window.removeEventListener('resize', handleResize);
        }
    })
  return (
    <div>
        <h1>Window width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent