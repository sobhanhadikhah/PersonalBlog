import React from 'react'

function NewCard({ coverPhoto }) {
    return (
        <div>
            <img src={coverPhoto.url} alt="" />
        </div>
    )
}

export default NewCard