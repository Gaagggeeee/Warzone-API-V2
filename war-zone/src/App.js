import React, { Component } from 'react';
import './App.css';
import { Container, Row , Col } from 'reactstrap';
import Profile from './components/profile';
import Footer from './components/footer';



class App extends Component {
  constructor(){
    super();
    this.state = {
      gamertag: '',
      platform: '',
      wins: undefined,
      kills: undefined
    };

   

  }

  getStats = async (e) => {

    e.preventDefault();

    const gamertag = e.target.elements.gamertag.value; 
    const platform = e.target.elements.platform.value;

    const response = await fetch(`https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platform}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "584a334868msh963be87d4acd8dep10151ejsn0bd0894e7aeb",
        "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
      }
    });
    
   const stats = await response.json();
   console.log(stats);
   
   this.setState({
      wins: stats.br.wins,
      kills: stats.br.kills,
      deaths:stats.br.deaths,
      downs:stats.br.downs,
      kdRatio:stats.br.kdRatio,
      revives:stats.br.revives,
      topFive:stats.br.topFive,
      topTen:stats.br.topTen,
      topTwen:stats.br.topTwentyFive,
      gamesPlayed:stats.br.gamesPlayed,
      score:stats.br.score,
      SPM:stats.br.scorePerMinute,
      contracts:stats.br.contracts,
      cash:stats.br.cash,
      timePlayed:stats.br.timePlayed
   });

  };
  

  render(){
    return (
      <>
        <Container className='form-container' fluid={true} >
          <Row>
            <Col>
              <div className='form-box'>
                <form onSubmit={this.getStats}>
                  <input 
                    className='input-box'
                    type='text'
                    name='gamertag'
                    autoComplete='off'
                    placeholder='Enter Gamertag'
                  />
                  <input 
                    className='input-box'
                    type='text'
                    name='platform'
                    autoComplete='off'
                    placeholder='Enter Platform'
                  />
                  <div>
                  <input 
                    className='input-box'
                    type='submit'
                  />
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <Profile 
          wins={this.state.wins}
          kills={this.state.kills}
          deaths={this.state.deaths}
          downs={this.state.downs}
          kdRatio={this.state.kdRatio}
          revives={this.state.revives}
          topFive={this.state.topFive}
          topTen={this.state.topTen}
          topTwen={this.state.topTwen}
          gamesPlayed={this.state.gamesPlayed}
          score={this.state.score}
          SPM={this.state.SPM}
          contracts={this.state.contracts}
          cash={this.state.cash}
          timePlayed={this.state.timePlayed}
        />
        <Footer />
      </>
    );
  }
}

export default App;
