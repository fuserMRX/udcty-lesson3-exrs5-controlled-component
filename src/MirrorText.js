import React, { Component } from 'react'

class MirrorText extends Component {
    state = {
        query: ''
    }

    handleChange = (value) => {
        this.setState((prevState) => ({
            query: value
        }))
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Say Something"
                    value={this.state.query}
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <p className="echo">Echo: {this.state.query}</p>
                <p>This should mirror the text you typed into the input field.</p>
            </div>
        )
    }
}

export default MirrorText;