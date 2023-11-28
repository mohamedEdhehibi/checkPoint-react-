import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(){
    return (
        <>
        <Navbar />
        <Container>
        <Row>
       <Col><Card1/></Col> 
        <Col><Card2/></Col>
       <Col><Card3/></Col> 
        </Row>
</Container>
     </>   
    )

}
export default App