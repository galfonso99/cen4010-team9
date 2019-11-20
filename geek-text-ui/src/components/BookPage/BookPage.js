import React, { Component } from 'react';
import BookSection from '../BookSection/BookSection';
import './BookPage.css';
import BookHeader from '../BookHeader/BookHeader';

class BookPage extends Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
      loading: false,
      error: null
    };

    this.fetchBooks = this.fetchBooks.bind(this);
  }
  async fetchBooks() {
    try {
      const response = await fetch("http://localhost:8090/api/books/");

      if (response.ok) {
        const data = await response.json();
        this.setState({ books: data });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    this.fetchBooks();
    this.setState({ loading: false });
  }
    render() {
        return(
          <div>
            <BookHeader/>
            <div className="bookpage">
                <div className="books-title">
                  <h1> The Book Store </h1> <br/>
                  <h2>All Books</h2><br/>
                </div>
                <div class = "pad">
                <BookSection data={this.state.books} /><br/>
                </div>

                
                
            </div>
          </div>
        );
    }
}

export default BookPage;