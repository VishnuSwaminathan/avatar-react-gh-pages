import React, { Component } from 'react';
import './App.css';
import pictureCardsJSON from './pictureCards.json';
import Nav from './components/NavBar';
import PictureCards from './components/PictureCards';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

function shufflePictures(pictureArray) {
  for (var i = pictureArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i - 1));
    [pictureArray[i], pictureArray[j]] = [pictureArray[j], pictureArray[i]];
  }
  return pictureArray;
}

class App extends Component {
  state = {
    score: 0,
    hiScore: 0,
    clicked: [],
    responsePrompt: '',
    pictureCardsJSON
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) == -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      responsePrompt: 'Correct!'
    });
    if (newScore >= this.state.hiScore) {
      this.setState({ hiScore: newScore });
    } else if (newScore == 8) {
      this.setState({ responsePrompt: 'You are now the Avatar!' });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      hiScore: this.state.hiScore,
      responsePrompt: 'The Fire Nation Won!',
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    var shuffledPictures = shufflePictures(pictureCardsJSON);
    this.setState({ pictureCardsJSON: shuffledPictures });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Avater Memory Game"
          score={this.state.score}
          hiScore={this.state.hiScore}
          responsePrompt={this.state.responsePrompt}
        />
        <Title>
          Click on each character to get points. <br />
          If you hit the same character more than once, your score will be
          reset!
        </Title>
        <div className="container">
          <div className="row">
            {this.state.pictureCardsJSON.map(pictureCard => (
              <div className="col col-md-3 col-sm-3">
                <PictureCards
                  key={pictureCard.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={pictureCard.id}
                  image={pictureCard.image}
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
