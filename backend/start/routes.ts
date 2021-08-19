/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'UsersController.create')
Route.post('/account', 'UsersController.show')
Route.post('/login', 'SessionsController.store')
Route.get('/', 'UsersController.index')

Route.post('/forgot', 'ForgotPasswordsController.store')
Route.put('/reset', 'ForgotPasswordsController.update')

Route.get('/all-games', 'GamesController.index')
Route.post('/new-bet', 'BetsController.create')
Route.get('/all-bets', 'BetsController.index')

Route.group(() => {
  Route.put('/new-password', 'UsersController.update')
  Route.delete('/delete-user', 'UsersController.delete')

  Route.post('/create-game', 'GamesController.create')
  Route.put('/update-game/:gameId', 'GamesController.update')
  Route.delete('/delete-game/:gameId', 'GamesController.delete')

  Route.delete('/delete-bet/:betId', 'BetsController.delete')
}).middleware('auth')
