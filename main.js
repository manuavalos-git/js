let listaElem=[];
window.onload= () => {
    /*alert("hola");
    const parrafo=document.getElementById('parrafo')
    console.log(parrafo);
    console.log(parrafo.innerHTML);
    console.log
    (parrafo.innerText);*/
// todos listas
    const form=document.getElementById('formulario');
    form.onsubmit= (e) => {
        e.preventDefault();
        const inpHTML=document.getElementById('texto')
        const elem=inpHTML.value;
        inpHTML.value='';
        const listHTML=document.getElementById('lista');
        listHTML.innerHTML='';
        listaElem.push(elem)
     //   console.log(elem);
     //   console.log(textHTML);
        for(let i=0;i<listaElem.length;i++){
            listHTML.innerHTML+='<li>'+listaElem[i]+'</li>';
            switch(listaElem[i]){
                case  "borrar": 
                    listaElem=[];
                    listHTML.innerHTML='';
                    break;    
                case  "chota":
                    listaElem=[];
                    listHTML.innerHTML='';
                    listHTML.innerHTML+= "<img id='foto' src='https://noticiasargentinas.com/media/k2/items/cache/5941d9671fa6454b219d189bd4d2e17e_XL.jpg?t=20210315_184729' / > "
                    break;  
                default:;
            }
        }
    }
}
