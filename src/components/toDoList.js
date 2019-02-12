import React, { Component } from "react";
import TheItems from "../components/todoitem";
import "../App.css";
export default class toDoList extends Component {
  render() {
    const { items, clear, handelDeletItem } = this.props;
    return (
      <ul className="list-group my-5 ">
        <h3 className="text-capitalize text-center" id="title">
          to do list
        </h3>
        {items.map(toDo => {
          return (
            <TheItems
              key={toDo.id}
              title={toDo.item}
              handelDeletItem={() => handelDeletItem(toDo.id)}
            />
          );
        })}

        <button
          onClick={clear}
          type="button"
          className="btn btn-danger text-capitalize btn-block mt-5"
        >
          clear list
        </button>
      </ul>
    );
  }
}
