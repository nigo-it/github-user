import React from 'react'
import {Scene, Router} from 'react-native-router-flux'

import Finder from '../Finder'
import Profile from '../Profile'

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="finder" component={Finder} title="Finder" initial={true}/>
      <Scene key="profile" component={Profile} title="Profile"/>
    </Scene>
  </Router>
)

export default App
