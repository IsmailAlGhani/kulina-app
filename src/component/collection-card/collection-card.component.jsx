import React from 'react';
import ItemCard from '../item-card/item-card.component';
import { Card, Item, Icon } from 'semantic-ui-react';
import pasta1 from '../../assets/ayesha-firdaus-B5KHSDnAxRw-unsplash.jpg';
import pasta2 from '../../assets/dario-TtadVut4jsg-unsplash.jpg';
import './collection-card.styles.scss';

class CollectionCard extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: false
    }
  }

  handleClick = () => {
    const {cart} = this.state;
    this.setState({cart: !cart});
  }

  render() {
    const items = [pasta1,pasta2];
    const {cart} = this.state;
    return (
      <div>
        <Card.Group itemsPerRow={4} stackable='true'>
          {items.map((item,index) => {
            return (
              <ItemCard key={index} Picture={item} handleClick={this.handleClick} />
            );
          })}
          {items.map((item,index) => {
            return (
              <ItemCard key={index + 2} Picture={item} handleClick={this.handleClick} />
            );
          })}
          {items.map((item,index) => {
            return (
              <ItemCard key={index + 4} Picture={item} handleClick={this.handleClick} />
            );
          })}
          {items.map((item,index) => {
            return (
              <ItemCard key={index + 6} Picture={item} handleClick={this.handleClick} />
            );
          })}
        </Card.Group>
        {cart ?
          <Item className='item'>
            <div className='description'>
              <div>
                <Item.Header as='h2'>5 Items | Rp 190,000</Item.Header>
                <Item.Meta>Termasuk ongkos kirim</Item.Meta>
              </div>
              <Icon name='shopping cart' size='large' className='description-icon'></Icon>
            </div>
          </Item> :
          null
        }
      </div>
    );
  }
}

export default CollectionCard;