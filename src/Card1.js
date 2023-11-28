import Card from 'react-bootstrap/Card';
import Product from './Product';
function TextExample() {
    return (
        <Card style={{ width: '18rem' ,marginTop:75}}>
            <Card.Body>
                <Card.Img variant="top" src={Product.ImgURL} />

                <Card.Title>{Product.Name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    {Product.Price}
                </Card.Text>
                <Card.Text>
                    {Product.Description}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default TextExample;