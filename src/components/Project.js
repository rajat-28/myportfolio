import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Food from '../assets/img/Food.png'
import weather from '../assets/img/wea.png'
import spotify from '../assets/img/sp.png'
function BasicExample() {
    return (
        <div className='my-4 projects' id="projects">
            <h1><span className='wrap mx-5'>Recent</span></h1>
            <h1><span className='wrap mx-5'>Projects</span></h1>
            <div className='container my-4 text-center mt-4 mb-4'>
                <Container>

                    <Row>
                        <Col>
                           
                            <Card style={{ width: '18rem' }}>
                            
                                <Card.Img variant="top" src={Food} style={{ height: '9rem' }}/>
                                <Card.Body>
                                    
                                    <Card.Title>Food Website</Card.Title>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={weather} style={{ height: '9rem' }}/>
                                <Card.Body>
                                    <Card.Title>Weather App</Card.Title>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={spotify} style={{ height: '9rem' }}/>
                                <Card.Body>
                                    <Card.Title>Spotify clone</Card.Title>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            
        </div>
    );
}

export default BasicExample;
