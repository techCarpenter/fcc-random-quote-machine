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
  { author: "", quote: "" },
  { author: "", quote: "" },
  { author: "", quote: "" }
];

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: quoteList[0].author,
      quote: quoteList[0].quote,
    };
    this.handleClick = this.newQuote.bind(this);
  }

  newQuote() {
    let newquote =
      quoteList[Math.floor(Math.random() * quoteList.length)];
    this.setState({ quote: newquote.quote, author: newquote.author });
  }

  render() {
    return (
      <React.Fragment>
        <blockquote id="text">
          <span className="quotations">"</span>
          {this.state.quote}
          <span className="quotations">"</span>
        </blockquote>
        <p id="author">-{this.state.author}</p>
        <a
          id="tweet-quote"
          className="button"
          target="_blank"
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes,FCC,&related=freecodecamp&text=" +
            encodeURIComponent(
              '"' + this.state.quote + '"\n-' + this.state.author
            )
          }
        >
          Tweet!
        </a>
        <a
          className="button"
          href="#"
          id="new-quote"
          onClick={() => {
            this.newQuote();
          }}
        >
          New Quote
        </a>
      </React.Fragment>
    );
  }
}

export default App;
