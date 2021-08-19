import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Mail from '@ioc:Adonis/Addons/Mail'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import NewPasswordValidator from 'App/Validators/NewPasswordValidator'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const data = request.only(['username', 'email', 'password'])
    await request.validate(CreateUserValidator)

    const user = await User.create(data)

    await Mail.send(message => {
      message
        .to(user.email)
        .from('pedrohenriquededeus@hotmail.com', 'Pedro | Luby')
        .subject('Welcome')
        .htmlView('emails/new_user', {
          username: user.username,
        })
    })

    return user
  }

  public async update({ request }: HttpContextContract) {
    const { email, oldPassword, newPassword } = request.only([
      'email',
      'oldPassword',
      'newPassword',
    ])

    await request.validate(NewPasswordValidator)

    const user = await User.findByOrFail('email', email)

    if (oldPassword !== newPassword) {
      user.password = newPassword

      console.log(user.password)

      await user.save()
    }

    return user
  }

  public async delete({ request }: HttpContextContract) {
    const { email } = request.only(['email'])

    const user = await User.findByOrFail('email', email)

    await user.delete()

    return 'User delete'
  }

  public async index({}: HttpContextContract) {
    const data = await User.query().select('*')

    let email = data.map(item => {
      return item.email
    })

    return email
  }

  public async show({ request }: HttpContextContract) {
    const { email } = request.only(['email'])

    const data = await User.findByOrFail('email', email)

    return data
  }
}
