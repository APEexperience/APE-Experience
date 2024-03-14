export async function onRequest(context) {
  // Create a prepared statement with our query
  const ps = context.env.DB.prepare('SELECT * from Newsletter');
  const data = await ps.first();

  return Response.json(data);
}
