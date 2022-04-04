let butt=document.getElementById("btn")
let ram = Math.floor(Math.random() * 100);;

butt.addEventListener("click",function(){
    let ramm = Math.floor(Math.random() * 100);;
    console.log("working");
    console.log(ram);
    let str="ADVICE  #"+ramm
    console.log(str);
    document.getElementById("heading-number").innerHTML = str;
   
    fetch("https://api.quotable.io/random")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      document.getElementById("parra").innerHTML = data.content;
    console.log(data.content);
  }).catch(function (alert) {
    document.getElementById("parra").innerHTML ='plz try again server is not responding'
  });

})

// fetch("https://api.quotable.io/random")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data.content);
//   });