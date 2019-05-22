const { getUserId } = require('./../utils')

// function user (parent, args, context, info){
function user (_, args, ctx, info){
  const userId = getUserId(ctx)
  // return binding.query.user({ where: { id: args.id }}, info)
  return ctx.db.query.user({ where: { id: userId }}, info)
 
 
}

module.exports ={
  user
}