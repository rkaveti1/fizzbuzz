$(function(){

  var myFunc = function(n)
  {
    for (i =0 ; i < n; i++)
    {
      if (i%3 == 0 )
        console.log("Fizz");
      else if (i%5 == 0)
        console.log("Buzz");
      else
        console.log(i);


    }
  }
  myFunc(14);

});
