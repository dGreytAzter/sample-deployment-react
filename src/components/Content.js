import {Container, Row} from 'react-bootstrap';
import GridItems from './GridItems';
import pic1 from './../img/1.png';
import pic2 from './../img/2.png';
import pic3 from './../img/3.png';
import pic4 from './../img/4.png';
import pic5 from './../img/5.png';

const Content = () => {
    return ( 
        <div className="bg-dark text-warning">
            <br />
            <Container>
                <h1>Top 5 Animes of the week</h1>
                <br />
                <Row className='g-4 justify-content-center'>
                    <GridItems image={pic1} title='Anime 1' />
                    <GridItems image={pic2} title='Anime 1' />
                    <GridItems image={pic3} title='Anime 1' />
                    <GridItems image={pic4} title='Anime 1' />
                    <GridItems image={pic5} title='Anime 1' />
                </Row>
            </Container>
            
        </div>
     );
}
 
export default Content;