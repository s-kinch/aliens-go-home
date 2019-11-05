import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { moveObjects } from './actions'
import { getCanvasPosition } from './utils/formulas'
import Canvas from './components/Canvas'

function App({angle, moveObjects}) {
    const [mousePosition, setMousePosition] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            moveObjects(mousePosition);
        }, 10)

        return () => {
            clearInterval(interval)
        }
    })

    const trackMouse = e => setMousePosition(getCanvasPosition(e))

    return (
        <div className="App">
            <Canvas
                angle={angle}
                trackMouse={trackMouse}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    angle: state.angle,
})

const mapDispatchToProps = {
    moveObjects,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
