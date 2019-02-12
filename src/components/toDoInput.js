import React, { Component } from "react";

export default class toDoInput extends Component {
  render() {
    const { item, handelChange, handelSubmit } = this.props;
    return (
      <div className="card card-body  my-3 shadow-lg  bg-black rounded ">
        <form onSubmit={handelSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="What To Do  ......"
              value={item}
              onChange={handelChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
