var nekiNiz= ['kfk', 'jfkje', 'krmnekr',
'ehrf', 'erjejrwer'];


function nizNajduzaRijec(niz){
    var najduzaRijec= '';
    var duljina = 0;
    for(var ime of niz){
        if (ime.length>duljina)
        {
            duljina=ime.length;
            najduzaRijec=ime;
        }
    }


    return najduzaRijec;
}
//


var najduzaRijec=nizNajduzaRijec(nekiNiz);
console.log(najduzaRijec);
//----------ovo su pitanja za ispit
//pitanje na testu (us sto je html)
//maximalni broj od dva broja koja unesemo-----
/*function getMax(a, b){
    let retVal;
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'unesi parametar koji je broj';
    }
    if(a>b){
       retVal= a; 
    } else if (b>a) {
   retVal =b;
    } else if(a===b)
    {  reVal=a;}
   else{
    console.log('ne mozemo usporedivati tekst!');
   }


    return letVal;
}
console.log('veci broj je:' + getMax(2,5));*/

