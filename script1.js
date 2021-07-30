setInterval(async () => {
    let resp =await fetch('https://random.dog/woof.json');
        let data =await resp.json();
        let img=document.getElementById('dog1');
        img.setAttribute("src",data.url);
 }, 3000);


// async function getData() {
//     try{
//         let resp =await fetch('https://random.dog/woof.json');
//         let data =await resp.json();
//         let img=document.getElementById('dog1');
//         img.setAttribute("src",data.url);



//        //imagefun(data);
//         //console.log(data);
//         }
//         catch(error)
//         {
//             console.log(error);
//         }
//     }
     //  getData();
       
    // setInterval(getData(), 3000);


// var myvar;
// function myFunction() {
//    myVar = setInterval(getData(), 5000);
// }

//function imagefun(data) {
           