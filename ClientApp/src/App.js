import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { NotFound } from './components/NotFound';
import { GetPostExample } from './components/GetPostExample';

import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <Layout>
              <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path='/counter' component={Counter} />
                  <Route path='/fetch-data' component={FetchData} />
                  <Route path='/get-post-example' component={GetPostExample} />
                  <Route component={NotFound} />
              </Switch>
          </Layout>
    );
  }
}
