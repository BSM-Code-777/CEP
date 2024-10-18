var cep = document.querySelector("#cep")
var logradouro = document.querySelector("#logradouro")
var bairro = document.querySelector("#bairro")
var localidade = document.querySelector("#localidade")
var uf = document.querySelector("#uf")
var btnBuscar = document.querySelector("#buscar")

async function coletar(x) {

    let info = x.value

    const ccep = await fetch(`https://viacep.com.br/ws/${info}/json`).then(
        (Response) => Response.json()
    );
    exibir(ccep)

}

function exibir(ccep) {

    logradouro.innerHTML = ccep.logradouro
    bairro.innerHTML = ccep.bairro
    localidade.innerHTML = ccep.localidade
    uf.innerHTML = ccep.uf
}

btnBuscar.addEventListener('click', ()=>{
    coletar(cep)
})