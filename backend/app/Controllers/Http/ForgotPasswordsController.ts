import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { v4 as uuidv4 } from 'uuid'
import ForgotPasswordValidator from 'App/Validators/ForgotPasswordValidator'
import ResetPasswordValidator from 'App/Validators/ResetPasswordValidator'
import User from 'App/Models/User'
import Mail from '@ioc:Adonis/Addons/Mail'
import moment from 'moment'

export default class ForgotPasswordsController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const { email } = request.all()
      await request.validate(ForgotPasswordValidator)

      const user = await User.findByOrFail('email', email)

      user.token = uuidv4()
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(message => {
        message
          .to(user.email)
          .from('pedrohenriquededeus@hotmail.com', 'Pedro | Luby')
          .subject('Reset password')
          .htmlView('emails/forgot_password', {
            email: user.email,
            username: user.username,
            password: user.password,
            token: user.token,
            link: `${request.input('redirect_url')}?token=${user.token}`,
          })
      })

      return user
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo não deu certo, esse email existe?' } })
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { token, password } = request.all()
      await request.validate(ResetPasswordValidator)

      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'Token expired' } })
      }

      user.token = undefined
      user.token_created_at = undefined
      user.password = password

      await user.save()
    } catch (err) {
      return response.status(err.status).send({
        error: {
          message: 'Something went wrong when resetting your password',
        },
      })
    }
  }
}
