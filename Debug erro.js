function validaArray(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os Parámetros');


        if (typeof arr !=='object')
        throw new TypeError('Array precisa ser do tipo object');
        
        if (typeof num !== 'number')
        throw new TypeError('Array nao precisa ser do tipo number');

        if (arr.length !==num) throw new RangeError('Tamanho invalido');

        return arr;
    }
    catch(e){
      if (e instanceof ReferenceError){
          throw e;
          console.log("Este erro é um ")
          console.log(e.mensage)
       } else if (e instanceof TypeError){
              console.log(e.mensage)
          } else if (e instanceof RangeError){
            console.log("Este erro é um  RangeError!")
            console.log(e.mensage){            

            } else{
                console.log("Tipo de erro não esperado" + e)
            }

          

      }    
    }
}


console.log(validaArray([1,2,3,4,5],5));