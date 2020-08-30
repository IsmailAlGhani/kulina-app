import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import './item-card.styles.scss';

const ItemCard = ({Picture, handleClick}) => (
  <Card fluid>
    <Image src={Picture} wrapped fluid />
    <Card.Content>
      <h2>4 <Icon name='star' color='yellow' /><Icon name='star' color='yellow' /><Icon name='star' color='yellow' /><Icon name='star' color='yellow' /><Icon name='star' disabled/></h2>
      <Card.Header>Pasta Bolognese</Card.Header>
      <Card.Meta>
        <h3>by Kulina . Uptown Lunch</h3>
      </Card.Meta>
      <Card.Description className='description'>
        <h1>Rp 35,000</h1>
        <Button icon='shopping cart' labelPosition='right' content='ADD' color='google plus' onClick={handleClick}/>
      </Card.Description>
    </Card.Content>
  </Card>
)

export default ItemCard;