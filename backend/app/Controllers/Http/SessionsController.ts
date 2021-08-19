import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SessionsController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = request.all();

    const token = await auth.use("api").attempt(email, password);

    return token;
  }
}
