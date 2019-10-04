import React, { Component } from "react";
import BookMainContainer from "../BookMainContainer/BookMainContainer";
import BookDescription from "../BookDescription/BookDescription";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import ReviewRow from "../ReviewRow/ReviewRow";

export default class BookDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:8090/api/books/1")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <BookMainContainer />
        <BookDescription />
        <ReviewsSection />
        <ReviewRow />
        <ReviewRow />
      </div>
    );
  }
}
