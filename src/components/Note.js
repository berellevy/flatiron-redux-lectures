import React from 'react'


function Note({ note }) {
    let {content} = note
    return (
        <li>
            <p>{content}</p>
        </li>
    )
}


export default Note