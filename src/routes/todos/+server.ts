export async function GET(): Promise<Response> {
  console.log('hello');
  return await fetch('http://misut.synology.me:12345/todos/', {method: 'GET'});
}

export async function POST({request}: {request: Request}): Promise<Response> {
  return await fetch('http://misut.synology.me:12345/todos/', {method: 'POST', body: JSON.stringify(await request.json()), headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}});
}
