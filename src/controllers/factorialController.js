module.exports = {
    factorial:(req,res)=>{
        var number =  req.body.number ?? 5;
        var factorial = calculateFactorial(number);

        console.log(`Factorial of ${number} is:-${factorial}`);
        
       res.json({"status":true,"factorial":factorial});
    }
    
}
function calculateFactorial(number){
    if(number==0){
        return 1;
    }else{
        return number*calculateFactorial(number-1);
    }
}