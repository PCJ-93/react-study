import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function FoodCard(props) {
    return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + props.food.imgPath} />
                    <Card.Body>
                        <Card.Title>{props.food.title}</Card.Title>
                        <Card.Text>{props.food.content}</Card.Text>
                        <Card.Text>{props.food.price}</Card.Text>
                        <Button variant="primary" href='https://naver.com' target='_blank'>상세보기</Button>
                    </Card.Body>
                </Card>
    );
}




export default FoodCard;