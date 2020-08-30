import React from 'react';
import { Button } from 'semantic-ui-react';
import './custom-option.styles.scss';

class CustomOption extends React.Component {
  constructor() {
    super();

    this.state = {
      prevScrollPos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollPos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    this.setState({prevScrollPos: currentScrollPos, visible: visible}, () => console.log(this.state));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={visible ? 'navbar': 'navbar-hidden'}>
        <Button.Group fluid>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </Button.Group>
      </div>
    );
  }
}

export default CustomOption;