const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

async function login (_, { email, password }, ctx, info) {

  const user = await ctx.db.query.user({ where: { email }})
  if(!user){
    throw new Error('Invalid Credentials!')
  }

  const valid = await bcrypt.compare(password, user.password)
  if(!valid){
    throw new Error('Invalid Credentials!')
  }

  //Gerar token JWT de um usuario ja existente
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '2h' })

  return {
    token,
    user
  }

}

//async function signup (parent, args, context, info)
async function signup (_, args, ctx, info){
  //Encriptando senha para armazenamento no banco de dados
  const password = await bcrypt.hash(args.password, 10)
  // ...args(Representa todos os campos exceto o passwd que foi encriptado na const acima, entao foi declarado depois)
  const user = await ctx.db.mutation.createUser({ data : {...args, password }})

  //Gerar token JWT para o novo usuario criado
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '2h' })

  return {
    token,
    user
  }

}

module.exports = {
  login,
  signup
}