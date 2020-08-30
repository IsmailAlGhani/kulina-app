import React from 'react';
import { Container, Header, Icon, Modal, Input, Grid, Divider } from 'semantic-ui-react';
import './location.styles.scss';

class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      location: 'Tokopedia Tower',
      modal: false
    }
  }

  openModal = () => {
    this.setState({modal: true});
  }

  closeModal = () => {
    this.setState({modal: false});
  }

  keyEnter = event => {
    const code = event.keyCode || event.which;
    const { value } = event.target;
    if (code === 13) {
      this.setState({location: value, modal: false});
    }
  }

  render() { 
    const { location, modal } = this.state;
    return (
      <Container fluid>
        <Header as='h4'>
          <Icon name='arrow left' />
          <Header.Content>
            <h6>ALAMAT PENGANTARAN</h6>
            {location}
            <Modal 
              closeIcon onOpen={this.openModal} onClose={this.closeModal} className='modal'
              open={modal} trigger={<Icon name='chevron down' className='click'/>}
            >
              <h1 className='info'>Cek makanan yang tersedia di lokasi kamu</h1>
              <Modal.Content>
                <Input fluid icon='point red' iconPosition='left' placeholder='Search location...' onKeyPress={this.keyEnter} />
                <Grid columns={2} className='section'>
                  <Grid.Row className='row'>
                    <Grid.Column computer={1} mobile={2}>
                      <Icon name='point' color='grey' circular='true'/>
                    </Grid.Column>
                    <Grid.Column computer={15} mobile={14} className='col'>
                      <Grid.Row>
                       <h3>Kulina</h3>
                      </Grid.Row>
                      <Grid.Row>
                        <h5>Jl. Tulodang atas 18, Senayan</h5>
                        <Divider className='divide' />
                      </Grid.Row>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column computer={1} mobile={2}>
                      <Icon name='point' color='grey' circular='true'/>
                    </Grid.Column>
                    <Grid.Column computer={15} mobile={14} className='col'>
                      <Grid.Row>
                       <h3>Pancoran Riverside Apartement</h3>
                      </Grid.Row>
                      <Grid.Row>
                        <h5>Pangadegan, Pancoran</h5>
                        <Divider className='divide' />
                      </Grid.Row>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column computer={1} mobile={2}>
                      <Icon name='point' color='grey' circular='true'/>
                    </Grid.Column>
                    <Grid.Column computer={15} mobile={14} className='col'>
                      <Grid.Row>
                       <h3>Block71 Jakarta</h3>
                      </Grid.Row>
                      <Grid.Row>
                        <h5>Ariobimo Sental, South Jakarta</h5>
                        <Divider className='divide' />
                      </Grid.Row>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Modal.Content>
            </Modal>
          </Header.Content>
        </Header>
      </Container>
    );
  }
}

export default Location;