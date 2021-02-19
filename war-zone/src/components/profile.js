import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './profile.css';


const Profile = props => {


    return(
        <>
            <Container className='profile-container' fluid={true} >
{/* FIRST CONTENT ROW */}
                <Row className='content-row'>
                    <Col sm='2'>
                        <div className='content-box'>
                            <div className='content-inner-box'> 
                                <p className='stat-name'>Wins:</p>
                                <p className='prop-box'>{props.wins}</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'> 
                            <p>Kills:</p>
                            <p className='prop-box'>{props.kills}</p> 
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'> 
                            <p>Deaths:</p>
                            <p className='prop-box'>{props.deaths}</p> 
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'> 
                            <p>Downs:</p>
                            <p className='prop-box'>{props.downs}</p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'>
                            <p>KD:</p>
                            <p className='prop-box'>{props.kdRatio}</p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'>
                            <p>Revives:</p>
                            <p className='prop-box'>{props.revives}</p>
                        </div>
                    </Col>
                </Row>
{/* CONTENT ROW TWO */}
                <Row className='contentRow'>
                    <Col sm='2'>
                        <div className='content-box'> 
                            <p>top Five:</p>
                            <p className='prop-box'>{props.topFive}</p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'> 
                            <p>Top Ten:</p>
                            <p className='prop-box'>{props.topTen}</p> 
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'> 
                            <p>Top TwenyFive:</p>
                            <p className='prop-box'>{props.topTwen}</p> 
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'> 
                            <p>Games Played:</p>
                            <p className='prop-box'>{props.gamesPlayed}</p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'>
                            <p>Score:</p>
                            <p className='prop-box'>{props.score}</p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='content-box'>
                            <p>Score Per Minute:</p>
                            <p className='prop-box'>{props.SPM}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'>
                        <div className='content-box'>
                            <p>Contracts:</p>
                            <p className='prop-box'>{props.contracts}</p>
                        </div>
                    </Col>
                    <Col sm='4'>
                        <div className='content-box'>
                            <p>Cash:</p>
                            <p className='prop-box'>{props.cash}</p>
                        </div>
                    </Col>
                    <Col sm='4'>
                        <div className='content-box'>
                            <p>Time Played:</p>
                            <p className='prop-box'>{props.timePlayed}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );


}


export default Profile;