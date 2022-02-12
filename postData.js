import fetch from "node-fetch";

export async function postData(url = '', data, headers) {
    const response = await fetch(url, {
      method: 'POST', 
      headers: headers,
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }