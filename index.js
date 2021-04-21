console.log('it works');

//promise
// 1. The promise are used in Async operation
// 2. promise has 3 state
    // 1. pending
    // 2.fulfilled -> success
    // 3.rejected ->error

//3. pomise is a built in class

//lets create a promis

// the promise result can be handeled by using 3 methods

//1. then method =>success
//2. catch method =>error
//3. finally method => will execute

// let promiseobj = new promiseclass(cbfn);

// Global variable

let v = true;
let promiseobj = new Promise (function(resolve , reject){

      if (v== true)
      {

        resolve('The value is true');
      }
      else{

        //error block
        reject('The value is false');
      }
});

console.log(promiseobj);

//** *the syntax of then() method is:  
  //promiseobject.then(onfulfilled ,onrejrcted);

  promiseobj.then(function(value){

    console.log('the Async operation is successful' +value);
  }).catch(function(value){

    console.log(`The Async operation is failed due to error${value}`);
  }).finally(function(value){

    console.log('This block is execute everytime');
  });
 