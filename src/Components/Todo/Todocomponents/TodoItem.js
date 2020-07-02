import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">





          <span className='text-success mx-2' onClick={handleEdit}><i><FontAwesomeIcon icon={faPen} /></i></span>
          <span className='text-danger mx-2' onClick={handleDelete}><i><FontAwesomeIcon icon={faTrash} /></i></span>
        </div>
      </li>
    );
  }
}
