const cep = document.querySelector("#cep")

const retornoDados = (result)=>{
    for(const inputs in result){
        if(document.querySelector('#'+inputs)){
            document.querySelector('#'+inputs).value = result[inputs]
        }
    }   
}

cep.addEventListener("blur",(e)=>{
    let consul = cep.value.replace("-","")
    const dados = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${consul}/json/`)
        .then(response =>{response.json()
            .then(resp => retornoDados(resp))
    })
    .catch (alert("Consultando... caso não retorne nem um dado, o CEP está INVÁLIDO ou NÃO FOI ENCONTRADO "))
         
    })