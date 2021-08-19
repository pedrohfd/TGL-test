import { Switch, Route } from 'react-router-dom'
import { RecentGames } from '../pages/RecentGames'
import { NotFound } from '../pages/NotFound'
import { AppPage } from '../pages/App'
// import { User } from '../pages/User'

export const AppRoutes = () => (
  <Switch>
    <Route path='/' exact component={RecentGames} />
    {/* <Route path='/account' component={User} /> */}
    <Route path='/new-bet' component={AppPage} />
    <Route path='*' exact component={NotFound} />
  </Switch>
)
