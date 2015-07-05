let Request = {
  get(url) {
    return (callback) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = () => {
        let response = xhr.responseText;
        if(xhr.readyState !== 4) {
          return;
        }
        if (xhr.status === 200) {
          callback(null, JSON.parse(response));
        }
        else {
          callback(response, null);
        }
      };
      xhr.send();
    };
  },
  runGenerator(fn) {
    let it = fn();
    let next = (err, arg) => {
      if (err){
        return it.throw(err);
      }
      let result = it.next(arg);
      if (result.done){
        return undefined;
      }
      if (typeof result.value === 'function') {
        result.value(next);
      }
      else {
        next(null, result.value);
      }
    };
    return next();
  }
};

export default Request;
