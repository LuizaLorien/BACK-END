const inclube = document.getElementById('inclube');
const btnadicionar = document.getElementById('btnadicionar');
const btnlistar = document.getElementById('btnlistar');
const btnmostrar = document.getElementById('btnmostrar');
const outlista = document.getElementById('outlista');

const adicionarclube = () =>{};


const clube = inclube.value;
if(clube === ""){
    alert('preencha o campo')
    inclube.focus()
    return
};
clube.push(clube);
console.log(clube);
inclube.value = '';
inclube.focus;

let lista = '';

clube.foreach((clube, index) => {
    return lista+= `${index}. ${clube}`

});

btnadicionar.addEventListener('click', adicionarclube);

const listarclube = ('click', adicionarclube);

const montarjogos = ()=> {
    if(clube.lenth % 2 !=0 || clube.lenth === 0){
        alert('muitos elementos, tente novamente com menos clubes');
        return
    };

    const metadeinicio = clube.slice(0, clube.length/2)
    console.log(metadeinicio, clube)


};
btnmostrar.addEventListener('click', montarjogos);
