import React, { Component } from "react";
import BookMainPhoto from "../BookMainPhoto/BookMainPhoto";
import BookMainInfo from "../BookMainInfo/BookMainInfo";

export default class BookMainContainer extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <BookMainPhoto />
            <BookMainInfo book={this.props.book} />
          </div>
        </div>
      </div>
    );
  }
}
