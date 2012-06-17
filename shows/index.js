function(o, req) {
  // !json templates.index
  if('Accept' in req.headers && req.headers['Accept'].indexOf('json')>0) {
    return {
      body: JSON.stringify({'service': 'Cassandre', 'revision': '2.12.03.10'}),
      headers: { 
        "Content-Type": "application/json",
      }
    }
  } else {
    return {
      body: templates.index,
      headers: { 
        "Content-Type": "text/html",
      }
    }
  }
}
