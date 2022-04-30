import "./styles.css";
import React from "react";
import icon from "./icon-star.svg";
import thankyouIcon from "./illustration-thank-you.svg";

function App() {
  const [secondPage, setSecondPage] = React.useState(false);
  const [rating, setRating] = React.useState("");

  function submitHandler() {
    rating !== "" &&
      setSecondPage((preValue) => {
        return !preValue;
      });
  }

  function buttonClick(e) {
    setRating(e.target.value);
  }

  return (
    <div className="App">
      {!secondPage ? (
        <div className="container first-page">
          {/* <div> */}
          <div className="star-container">
            <img className="star" src={icon} alt="star" />
          </div>
          {/* </div> */}
          <h1 className="how">How did we do? </h1>
          <p className="first-page-p">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating">
            <button onClick={buttonClick} value="1" className="rating-number">
              1
            </button>
            <button onClick={buttonClick} value="2" className="rating-number">
              2
            </button>
            <button onClick={buttonClick} value="3" className="rating-number">
              3
            </button>
            <button onClick={buttonClick} value="4" className="rating-number">
              4
            </button>
            <button onClick={buttonClick} value="5" className="rating-number">
              5
            </button>
          </div>
          <button className="btn" onClick={submitHandler} type="submit">
            SUBMIT
          </button>
        </div>
      ) : (
        <div className="container second-page">
          <div className="thank-you-container">
            <img className="thank-you" src={thankyouIcon} alt="thankyou" />
          </div>

          <p className="answer-box">You selected {rating} out of 5</p>
          <h1 className="thank">Thank You</h1>
          <p className="appreciate">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
