// function user (parent, args, context, info){
function user (_, args, ctx, info){
  // return binding.query.user({ where: { id: args.id }}, info)
  return ctx.db.query.user({ where: { id: args.id }}, info)
}

module.exports ={
  user
}