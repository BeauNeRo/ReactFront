import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import './components.css';

function NewProduct() {
    return(
        <div className="NewProduct">
            <div className="container">
                <div className="productTop">
                    <span>New Product</span>
                    <Button variant="light">+</Button>
                </div>
                <div className="row" style={{justifyContent:'space-around'}}>
                    <Card style={{ width: '23%',margin:'0 .3rem', padding:'0'}}>
                        <Card.Img variant="top" src="http://alittle-b.com/web/product/small/202105/f12d0f0d9253c1bfe110403073f569b6.jpg"/>
                        <Card.Body>
                            <h6>Card Title</h6>
                            <Card.Text style={{fontSize:'.8rem'}}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '23%', margin:'0 .3rem' , padding:'0'}}>
                        <Card.Img variant="top" src="http://alittle-b.com/web/product/small/202105/499c3f5c34d64dd6152e30e27c41931b.webp" />
                        <Card.Body>
                            <h6>Card Title</h6>
                            <Card.Text style={{fontSize:'.8rem'}}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '23%', margin:'0 .3rem', padding:'0'}}>
                        <Card.Img variant="top" src="http://alittle-b.com/web/product/small/202105/03e50bb0a24104562ade7a2ec07c0991.jpg" />
                        <Card.Body>
                            <h6>Card Title</h6>
                            <Card.Text style={{fontSize:'.8rem'}}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '23%', margin:'0 .3rem', padding:'0'}}>
                        <Card.Img variant="top" src="http://alittle-b.com/web/product/small/202105/e3e34c48ef930678ab77f08a5d24be86.jpg" />
                        <Card.Body>
                            <h6>Card Title</h6>
                            <Card.Text style={{fontSize:'.8rem'}}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
