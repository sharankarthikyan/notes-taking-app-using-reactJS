import React, { Component } from "react";
import TodoList from "./ToDoList/ToDoList";
import "./ToDoComponent.css";
import "../../UI/Fonts/Fonts.css";

class ToDoComponent extends Component {
  state = {
    text: "",
  };

  handleEdit = (e, itemIndex, columnIndex) => {
    let columnData = [...this.props.columnData];
    let column = columnData[columnIndex];
    let item = column.columnItemsArray[itemIndex];
    item.text = e.target.value;
    column[itemIndex] = item;
    columnData[columnIndex] = column;
    this.props.handleEdit(columnData);
  };

  handleDelete = (itemIndex, columnIndex) => {
    let columnData = [...this.props.columnData];
    let column = columnData[columnIndex];
    column.columnItemsArray.splice(itemIndex, 1);
    columnData[columnIndex] = column;
    this.props.handleDelete(columnData);
  };

  render() {
    let data = "";
    if (this.props.columnData !== null) {
      data = Object.keys(this.props.columnData).map((column, index) => {
        return (
          <div className="mt-2 card p-3 column mb-4" key={index}>
            <h4 className="agl">
              {Object.values(this.props.columnData[column].columnTitle)}
              <div
                className="ui vertical tiny red animated button ml-3"
                tabIndex="0"
                onClick={() => this.props.deleteColumn(column)}
              >
                <div className="hidden content agl">Delete</div>
                <div className="visible content">
                  <i className="trash icon" />
                </div>
              </div>
            </h4>
            <p className="float-right text-muted asl">
              Created on {this.props.columnData[column].columnDate}
            </p>
            <TodoList
              items={this.props.columnData[column].columnItemsArray}
              columnIndex={column}
              likesHandler={(index, columnIndex) =>
                this.props.likesHandler(index, columnIndex)
              }
              handleEdit={(e, index) => this.handleEdit(e, index, column)}
              handleDelete={(index) => this.handleDelete(index, column)}
            />
            <form
              onSubmit={(e) =>
                this.props.handleItemsSubmit(
                  e,
                  this.props.columnData[column].itemText,
                  column
                )
              }
            >
              <input
                className="form-control col-sm-3"
                id="new-todo"
                key={column}
                onChange={(e) => this.props.handleChange(e, column)}
                value={this.props.columnData[column].itemText}
                required
              />
              <button className="btn btn-success mt-2 agl">
                Add Note #
                {this.props.columnData[column].columnItemsArray === undefined
                  ? 1
                  : Object.keys(this.props.columnData[column].columnItemsArray)
                      .length + 1}
              </button>
            </form>
          </div>
        );
      });
    }
    return <div className="mt-3 mb-3">{data}</div>;
  }
}

export default ToDoComponent;
