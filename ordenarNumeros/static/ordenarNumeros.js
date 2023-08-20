let array=[]

function validarIngresar()
{   array=[]    
    let j=0;   
    let e=0
    for(let i=1; i<7 ;i++)
    {
        array.push(Number(document.getElementById('N0'+i).value) )   
        if(!(array[j]>=0 && array[j]<=100 && typeof array[j] === 'number'))
        {                                  
            document.getElementById("selectOrdenar").selectedIndex = 0;
            e++;
        }        
        j++        
    }
    (e===0) ? alert("Valores Correctos puede ordenar"):alert("Corregir el valor debe estar entre [0-100]")
}

function limpiar()
{
  for(let i=1; i<7 ;i++)
  {
      document.getElementById('N0'+i).value=""        
  }
  array=[]  
  document.getElementById("selectOrdenar").selectedIndex = 0;
}


function ordenarArray(seleccionValue)
{ 
  let arrayOrdenado=[]
  let seleccion = seleccionValue.value;  
  (seleccion==="ASCENDENTE") ?arrayOrdenado=ordenarAsc() : arrayOrdenado=ordenarDesc()      
  mostrar(arrayOrdenado)  
}

function mostrar(arrayFinal){
  let j=1
  for(let i=0; i<arrayFinal.length ;i++)
  {    
      document.getElementById('N0'+j).value=arrayFinal[i]      
      j++
  }
}


function ordenarAsc()
{
  array.sort((a, b) => {
    if(a == b) {
        return 0; 
     }
    if(a < b) {
       return -1;
        }
    return 1;
   });
   return array
}

function ordenarDesc()
{
  array.sort((a, b) => {
        if(a == b) {
          return 0; 
        }
        if(a > b) {
          return -1;
        }
        return 1;
      });
      return array
     
}