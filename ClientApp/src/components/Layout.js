import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        {/*��������� Bootstrap � ����������� Layout.js, 
         * ��������� - ���������� �� App.js ������ <Layout></Layout>?*/}
        <Container>
            {this.props.children}
        </Container>
      </div>
    );
  }
}
