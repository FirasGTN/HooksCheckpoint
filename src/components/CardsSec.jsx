import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function CardsSec() {
  return (
    <Card style={{ width: '25rem', height: '20rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" id='btsc' >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default CardsSec;