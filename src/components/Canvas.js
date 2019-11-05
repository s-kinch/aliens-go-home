import React from 'react'
import Sky from './Sky'
import Ground from './Ground'
import CannonBase from './CannonBase'
import CannonPipe from './CannonPipe'
import CannonBall from './CannonBall'
import CurrentScore from './CurrentScore'
import FlyingObject from './FlyingObject'
import Heart from './Heart'
import StartGame from './StartGame'

const Canvas = ({ trackMouse, angle }) => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax slice"
            onMouseMove={trackMouse}
            viewBox={viewBox}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            <Sky />
            <Ground />
            <CannonPipe rotation={angle} />
            <CannonBase />
            <CannonBall position={{ x: 0, y: -100 }} />
            <CurrentScore score={13} />
            <FlyingObject position={{x: -150, y: -300}} />
            <Heart position={{x: -300, y: 35}} />
            <StartGame onClick={() => console.log('Aliens')}/>
        </svg>
    )
}

export default Canvas