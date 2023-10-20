var hr = new Date().getHours();
// hr = new Date().setHours(8);
if(hr<5)
{
    console.log("It's midnight..Sleep well");
}
else if(hr<8 && hr>5){
    console.log("Good morning");
}
else{
    console.log("Start working");
}