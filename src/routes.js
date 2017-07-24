import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/main';
import YTApp from './components/yt_app';
import CDApp from './components/cd_app';
import TMApp from './components/tm_app';


export default (
    <Route path="/" component={Main} >
        <IndexRoute component={YTApp} />
        <Route path="/countdown" component={CDApp} />
        <Route path="/timer" component={TMApp} />
    </Route>

);