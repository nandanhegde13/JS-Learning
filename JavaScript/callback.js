setTimeout(myFun,3000);

function myFun()
    {
        console.log("hello");
    }


setTimeout(
    function myFun()
    {
        console.log("hello");
    }
,3000)

// setInterval(
//     function myFun()
//     {
//         console.log("hello");
//     }
// ,3000)


