const resolvedPromise = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            const success = {'message': 'delayed success!'}
            resolve(success)
        }, 500)
    })
    return promise
}

const rejectedPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('error: delayed exception!');
      } catch (e) {
        reject(e);
      }
    }, 500);
  });
  return promise;
};

resolvedPromise().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log("Error: " + err)
})

rejectedPromise().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err.message)
})



