import React, { Component } from 'react';
import { Container, Row , Col } from 'reactstrap';
import Profile from './profile';

const Form = props => {
   
        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <form onSubmit={getStat()}>
                                <input 
                                    type='text'
                                    value={this.gamertag}
                                    onChange={this.onGamertagChange}
                                    autoComplete='off'
                                    placeholder='Enter Gamertag'
                                />
                                <input 
                                    type='text'
                                    value={this.platform}
                                    onChange={this.onPlatformChange}
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


export default Form;