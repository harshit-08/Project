import React from 'react'
import '../Styles/list.css'

function List({ id, name, showModalHandler }) {
    return (
        <div className="list">
            <ul className="list__ul">
                <div onClick={() => showModalHandler(id)} className="list__ul__id" >{id}</div>
                <div onClick={() => showModalHandler(id)} className="list__ul__name"  >{name}</div>
            </ul>

        </div>
    )
}

export default List
