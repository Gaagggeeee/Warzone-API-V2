import React, { Component } from 'react';
import './App.css';
import { Container, Row , Col } from 'reactstrap';
import Profile from './components/profile';



class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
        gamertag: '',
        password: '',
        wins: undefined,
        kills: undefined,
        deaths: undefined,
        downs: undefined,
        kdRatio: undefined,
        revives: undefined,
        topFive: undefined,
        topTen: undefined,
        topTwen: undefined,
        gamesPlayed: undefined,
        score: undefined,
        SPM: undefined,
        contracts: undefined,
        cash: undefined,
        timePlayed: undefined
    }

    this.handleGamertag = this.handleGamertag.bind(this);
    this.handleplatform = this.handlePlatform.bind(this);
    
    this.getStat();
}

  handleGamertag(event) {
    this.setState({gamertag: event.target.value});
    event.preventDefault();
  }

  handlePlatform(event) {
    this.setState({platform: event.target.value});
    event.preventDefault();
  }

 
  
  getStat = async (event) => {
    
    const gamertag = 'gaagggeeee';
    const platform = 'xbl';


    if(gamertag && platform){


      const response = await fetch(`https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platform}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '584a334868msh963be87d4acd8dep10151ejsn0bd0894e7aeb',
          'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
        }
      });
      
     

        const stats = await response.json();

        console.log(stats);

        this.setState ({
            wins:stats.wins,
            kills:stats.kills,
            deaths:stats.deaths,
            downs:stats.downs,
            kdRatio:stats.kdRatio,
            revives:stats.revives,
            topFive:stats.topFive,
            topTen:stats.topTen,
            topTwen:stats.topTwen,
            gamesPlayed:stats.gamesPlayed,
            score:stats.score,
            SPM:stats.SPM,
            contracts:stats.contracts,
            cash:stats.cash,
            timePlayed:stats.timePlayed
        });
    } else {
        this.setState({error: true});
    }
}

  render(){
    return (
      <>
                  <Container>
                    <Row>
                        <Col>
                            <form onSubmit={this.getStat}>
                                <input 
                                    type='text'
                                    value={this.gamertag}
                                    onChange={this.GamertagChange}
                                    autoComplete='off'
                                    placeholder='Enter Gamertag'
                                />
                                <input 
                                    type='text'
                                    value={this.platform}
                                    onChange={this.PlatformChange}
                                    autoComplete='off'
                                    placeholder='Enter Platform'
                                />
                                <input 
                                    type='submit'
                                />
                            </form>
                        </Col>
                    </Row>
                </Container>
                <Profile />
      </>
    );
  }
}

export default App;
