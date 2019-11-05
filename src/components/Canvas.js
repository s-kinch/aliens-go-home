import React from 'react'
import Sky from './Sky'
import Ground from './Ground'
import CannonBase from './CannonBase'
import CannonPipe from './CannonPipe'

const Canvas = ({trackMouse, angle}) => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax slice"
            onMouseMove={trackMouse}
            viewBox={viewBox}
        >
            <Sky/>
            <Ground/>
            <CannonPipe rotation={angle}/>
            <CannonBase/>
        </svg>
    )
}

export default Canvas