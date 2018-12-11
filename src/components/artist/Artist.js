import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay,CardTitle,CardText,Button,CardDeck,Row, CardBody, Col } from 'reactstrap';
//import Row from "reactstrap/src/Row";
//import Col from "reactstrap/src/Col";
//import CardBody from "reactstrap/src/CardBody";
//import CardDeck from "reactstrap/src/CardDeck";
import './artist.css';

const divStyle = {

    height: '100',
    margin: '100px'

};
class Artist extends Component
{
    render()
    {
        return(
<CardDeck>
            <Row style={divStyle}>
                <Col sm="4">
                    <Card>

                        <CardBody>

                            <CardTitle><h2>North American Artistes</h2></CardTitle>
                            <CardText className="content">
                                <ul>
                                    <li><h4>Tony Vincent</h4></li>
                                    <li><h4>All4One</h4></li>
                                    <li><h4>Craig Wayne Boyd</h4></li>
                                    <li><h4>Malynda Hale</h4></li>
                                    <li><h4>Juliet</h4></li>
                                    <li><h4>Kenny Morain</h4></li>
                            </ul>

                            </CardText>

                        </CardBody>

                    </Card>
                </Col>
                <Col sm="4">
                    <Card>

                        <CardBody>

                            <CardTitle><h2>South American Artistes</h2></CardTitle>
                            <CardText>
                                <ul>
                                    <li><h4>Gaby Moreno</h4></li>
                                    <li><h4>Mauricio Claveria</h4></li>
                                    <li><h4>Lack of Remorse</h4></li>
                                    <li><h4>Alejandro Lerner</h4></li>

                            </ul>
                            </CardText>

                        </CardBody>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card>

                        <CardBody>

                            <CardTitle className="card-title"><h2>Indian Artistes</h2></CardTitle>
                            <CardText>
                                <ul>
                                    <li><h4>
                                        Shreya Ghosal
                                    </h4>
                                    </li>

                                    <li><h4>
                                        Vijay Dayal
                                    </h4>
                                    </li>

                                    <li>
                                        <h4>
                                        Saleem Sulaiman
                                        </h4>
                                    </li>

                                    <li>
                                        <h4>
                                        Saleem Merchant
                                        </h4>
                                    </li>

                                    <li><h4>
                                        Vishal Dadlani</h4>
                                    </li>
                                </ul>
                            </CardText>



                        </CardBody>
                    </Card>

                </Col>
            </Row>

    <Row style={divStyle}>

                <Col sm="4">
                    <Card>

                        <CardBody>

                            <CardTitle><h2>Europe & UK</h2></CardTitle>
                            <CardText>
                                <ul>
                                    <li><h4>Taren Kaur</h4></li>

                                </ul>
                            </CardText>


                        </CardBody>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card>

                        <CardBody>

                            <CardTitle><h2>East Asian Artistes</h2></CardTitle>
                            <CardText>
                                <ul>
                                    <li><h4>Gareth Nicholas Fernandez</h4></li>

                                </ul>
                            </CardText>


                        </CardBody>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card>

                        <CardBody className="cardName">

                            <CardTitle><h2>Engineers who use Stealth Sonics</h2></CardTitle>
                            <CardText>

                                <ul>
                                    <li><h4>Jeff Gross</h4></li>
                                    <li><h4>Karrie Keyes</h4></li>
                                    <li><h4>Marc Urselli</h4></li>
                                    <li><h4>Lisa Chamblee</h4></li>
                                    <li><h4>Dave Hampton</h4></li>
                                </ul>
                            </CardText>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
</CardDeck>

        )
                }
}
export default Artist;


