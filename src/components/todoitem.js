import React, { Component } from "react";

export default class todoitem extends Component {
  render() {
    const { title, handelDeletItem } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2 shadow-lg  bg-black rounded ">
        <h6>{title}</h6>
        <div className="tod-icon">
          <span
            onClick={handelDeletItem}
            className="mx-2 text-denger"
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
