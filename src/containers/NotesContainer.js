import React, { Component } from 'react'
import fetcher from "../fetcher"
import Note from '../components/Note'
import { connect } from 'react-redux'




class NotesContainer extends Component {

    // state = {notes: []}
    
    // componentDidMount() {
    //     fetcher("http://localhost:3000/notes", this.inStateNotes)
    // }

    // inStateNotes = (notes) => this.setState({ notes: notes})
    
    renderNotes = () => this.props.notes.map(note => <Note key={note.id} note={note} />)
    
    
    
    render() {
 
        return (
            <ul>
                {this.renderNotes()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(NotesContainer)