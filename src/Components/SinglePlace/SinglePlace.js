import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

const SinglePlace = (props) => {
    const {img} = props.product;
    return (
        <div>
        <Card style={{width: '150px', marginRight: '10px'}}>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
        </CardBody>
      </Card>
        </div>
    );
};

export default SinglePlace;