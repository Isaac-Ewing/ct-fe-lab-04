export const handleAPI = async (url, method, input) => {
  let req = '';
  if(method === 'GET') {
    req = await fetch(url, { method: 'GET' });
  }
  else {
    req = await fetch(url, { method: 'POST', body: JSON.stringify(input) });
  }
  const res = await req.json();
  console.log(res);
  return res;
};
