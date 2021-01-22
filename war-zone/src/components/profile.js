import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './profile.css';


const Profile = props => {


    return(
        <>
            <Container className='profileContainer'>
{/* FIRST CONTENT ROW */}
                <Row className='contentRow'>
                    <Col sm='2'>
                        <div className='contentBox'> 
                            <p>Wins: {props.wins} </p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'> 
                            <p>Kills: {props.kills}</p> 
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'> 
                            <p>Deaths: {props.deaths}</p> 
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'> 
                            <p>Downs: {props.downs} </p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'>
                            <p>KD: {props.kdRatio} </p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'>
                            <p>Revives: {props.revives}</p>
                        </div>
                    </Col>
                </Row>
{/* CONTENT ROW TWO */}
                <Row className='contentRow'>
                    <Col sm='2'>
                        <div className='contentBox'> 
                            <p>top Five: {props.topFive} </p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'> 
                            <p>Top Ten: {props.topTen}</p> 
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'> 
                            <p>Top TwenyFive: {props.topTwen}</p> 
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'> 
                            <p>Games Played: {props.gamesPlayed} </p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'>
                            <p>Score: {props.score} </p>
                        </div>
                    </Col>
                    <Col sm='2'>
                        <div className='contentBox'>
                            <p>Score Per Minute: {props.SPM}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'>
                        <div className='contentBox'>
                            <p>Contracts: {props.contracts}</p>
                        </div>
                    </Col>
                    <Col sm='4'>
                        <div className='contentBox'>
                            <p>Cash: {props.cash}</p>
                        </div>
                    </Col>
                    <Col sm='4'>
                        <div className='contentBox'>
                            <p>Time Played: {props.timePlayed}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );


}


export default Profile;