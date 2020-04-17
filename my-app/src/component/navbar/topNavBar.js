import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

import FetchData from '../pokemon';

export default class TopNavBar extends React.Component {
    constructor(props) {
      super(props);
      this.num = React.createRef();
    }

    fetchPokemon(){
        FetchData.fetchNew();
    }

    fetchSpecific(){
        if (this.num.current.value > 807) return;
        FetchData.fetchNew(this.num.current.value);
    }

    updateVal(val){
        
        this.num = val;
    }

    render() {
        return ( 
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">POKEMON-@master</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link onClick={this.fetchPokemon}>New</Nav.Link>
                <NavDropdown title="Actions" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={this.fetchPokemon}>NEW</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline onSubmit={this.fetchSpecific.bind(this)}>
                <FormControl 
                    type="text" ref={this.num} type="text" placeholder="pokemon number ..." className="mr-sm-2" />
                <Button type="submit" variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        );
    };
}