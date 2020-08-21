import React, { Component } from 'react'
import { connect } from 'react-redux'


class NoteForm extends Component {
    state = { 
        content: ""
    }

    changeHandler = (e) => {
        let { name, value } = e.target
        this.setState( { [name]: value } )
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    name="content"
                    type="text-area"
                    value={this.state.content}
                    onChange={this.changeHandler}
                />
                <input type="submit" value="add note"/>

            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {submitHandler: (noteObj) => dispatch({type: "add note", payload: noteObj})}
}

export default connect(null, mapDispatchToProps)(NoteForm)