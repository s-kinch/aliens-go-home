import React from 'react'
import { connect } from 'react-redux'

function App({message}) {
    return (
        <div className="App">
            {message}
        </div>
    )
}

const mapStateToProps = state => ({
    message: state.message,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
