import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
  return (
    <div className="container">
      <Row>
        <Col md={4}>
          <Card style={{ width: '100%', height: '28rem' }}>
            <Card.Img variant="top" src="cheesepepperoni.jpg" />
            <Card.Body>
              <Card.Title>Pizza Cheesepepperoni</Card.Title>
              <Card.Text>
                Une putain de pizza trop bonne que leo il mange
              </Card.Text>
              <Button variant="primary my-5">Ajouter au panier</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '100%', height: '28rem' }}>
            <Card.Img variant="top" src="margherita.jpg" />
            <Card.Body>
              <Card.Title>Pizza Margherita</Card.Title>
              <Card.Text>
                Une putain de pizza trop bonne que leo il mange
              </Card.Text>
              <Button variant="primary my-5">Ajouter au panier</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '100%', height: '28rem' }}>
            <Card.Img variant="top" src="farmhouse.jpg" />
            <Card.Body>
              <Card.Title>Pizza Farmhouse</Card.Title>
              <Card.Text>
                Une putain de pizza trop bonne que leo il mange
              </Card.Text>
              <Button variant="primary my-5">Ajouter au panier</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '100%', height: '28rem' }}>
            <Card.Img variant="top" src="IndianTandooriChickenTikka.jpg" />
            <Card.Body>
              <Card.Title>Pizza IndianTandooriChickenTikka</Card.Title>
              <Card.Text>
                Une putain de pizza trop bonne que leo il mange
              </Card.Text>
              <Button variant="primary my-5">Ajouter au panier</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '100%', height: '28rem' }}>
            <Card.Img variant="top" src="veggie_paradise.jpg" />
            <Card.Body>
              <Card.Title>Pizza veggie_paradise</Card.Title>
              <Card.Text>
                Une putain de pizza trop bonne que leo il mange
              </Card.Text>
              <Button variant="primary my-5">Ajouter au panier</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '100%', height: '28rem' }}>
            <Card.Img variant="top" src="chicken_golden_delight.jpg" />
            <Card.Body>
              <Card.Title>Pizza chicken_golden_delight</Card.Title>
              <Card.Text>
                Une putain de pizza trop bonne que leo il mange
              </Card.Text>
              <Button variant="primary my-5">Ajouter au panier</Button>
            </Card.Body>
          </Card>
      </Row>
    </div>
    
  );
}

export default Cards;
