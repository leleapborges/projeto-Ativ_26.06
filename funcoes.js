//pegando html
function multiplicar(){
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var res = document.getElementById('resultado');


    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    if(n1 == 0 || n2 == 0){
        res.innerText = `Preencha os campos corretamente`
    }else{
        //multiplicando
    var m = n1 * n2;
    res.innerHTML = `A multiplicação entre ${n1} e ${n2} é iqual a ${m}`
    }
}
//função para calcula o fatorial
function fatorial(){
    var tn3 = document.getElementById('txtn3');
    var n3 = Number(tn3.value);
    var resul = document.getElementById('res');
    if(n3 == 0){
        resul.innerText = `Preencha os campos corretamente`
    }else{
        var fat = 1;
        
        for(var c = n3; c > 1 ; c --){
            fat = fat * c
            resul.innerText = `O resultado do fatorial de ${n3} é ${fat}`;
        };

    };

}