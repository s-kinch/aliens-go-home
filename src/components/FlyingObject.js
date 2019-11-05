import React from 'react'
import FlyingObjectBase from './FlyingObjectBase'
import FlyingObjectTop from './FlyingObjectTop'

const FlyingObject = ({ position }) => (
    <g>
        <FlyingObjectBase position={position} />
        <FlyingObjectTop position={position} />
    </g>
)

export default FlyingObject