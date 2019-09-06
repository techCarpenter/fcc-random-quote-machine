import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Quote />
    </React.Fragment>
  );
}

const quoteList = [
  {
    author: "Maximus Decimus Meridius",
    quote:
      "My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions, loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next."
  },
  {
    author: "George S. Patton",
    quote:
      "Now I want you to remember that no bastard ever won a war by dying for his country. He won it by making the other poor dumb bastard die for his country."
  },
  {
    author: "John Adams",
    quote:
      "Public business, my son, must always be done by somebody. It will be done by somebody or other. If wise men decline it, others will not; if honest men refuse it, others will not."
  },
  {
    author: "Abraham Lincoln",
    quote: "You can tell the greatness of a man by what makes him angry."
  },
  {
    author: "Samuel Taylor",
    quote:
      "Genius is the power of carrying the feelings of childhood into the powers of manhood."
  },
  {
    author: "Ernest Hemingway",
    quote:
      "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self."
  }
];

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: quoteList[0].author,
      quote: quoteList[0].quote,
      currentIndex: 0
    };
    this.handleClick = this.newQuote.bind(this);
  }

  newQuote() {
    let index = Math.floor(Math.random() * quoteList.length);
    let newIndex =
      index === this.state.currentIndex
        ? index + 1 > quoteList.length
          ? index - 1
          : index + 1
        : index;
    let newquote = quoteList[newIndex];
    this.setState({ currentIndex: newIndex });
    this.setState({ quote: newquote.quote, author: newquote.author });
  }

  render() {
    //@ts-ignore
    return (
      <React.Fragment>
        <blockquote id="text">
          <span className="quotations">"</span>
          {this.state.quote}
        </blockquote>
        <p id="author">-{this.state.author}</p>
        <div className="buttonBox">
          <div className="tweet-button-box">
            <a
              id="tweet-quote"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes,FCC,&related=freecodecamp&text=" +
                encodeURIComponent(
                  '"' + this.state.quote + '"\n-' + this.state.author
                )
              }
            >
              Tweet!
            </a>
          </div>
          <div className="newquote-button-box">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a
              className="button newquote-button"
              href="#"
              rel="noopener noreferrer"
              id="new-quote"
              onClick={() => {
                this.newQuote();
              }}
            >
              New Quote
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
