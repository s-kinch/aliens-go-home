import React from 'react'
import { connect } from 'react-redux'
import Canvas from './components/Canvas'

function App() {
    return (
        <div className="App">
            <Canvas/>
        </div>
    )
}

const mapStateToProps = state => ({
    // message: state.message,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
