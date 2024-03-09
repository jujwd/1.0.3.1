const nome = "Julia";
const anoNascimento = 2003;

const nome2 = "Gabriel";
const anoNascimento2 = 2003;

const julia = {
    "nome": "Julia Dias",
    "anoNascimento": 2003,
    "enderecos": [
        {
            bairro: "Restinga Nova",
            numero: 129,
            logradouro: "Rua do Coqueiro",
            complemento: null
        },
        {
            "bairro": "Restinga Nova",
            "numero": 155,
            "logradouro": "Rua Bernardo Tchernin",
            "complemento": "Loja 26"
        }
    ]
}

const gabriel = {
    "nome": "Gabriel",
    "anoNascimento": 2004,
    "endereco": [
        {
            "bairro": "Glória",
            "numero": 128,
            "logradouro": "Rua do Limoeiro",
            "complemento": null
        },
        {
            "bairro": "Partenon",
            "numero": 157,
            "logradouro": "Av. Bento Gonçalves",
            "complemento": null
        }
    ]
}

const mathias = {
    nome: "Mathias Gheno Azzolini",
    anoNascimento: 1995,
    enderecos: [
        {
            "bairro": "Passo de Areia",
            "numero": 497,
            "logradouro": "Av. Andarai",
            "complemento": "ap 202"
        },
        {
            "bairro": "Ponta Grossa",
            "numero": 150,
            "logradouro": "Mercedes Azzolini",
            "complemento": null
        }
    ]
}
// JSON é o que chamamos de javascript objective notation: nada mais é que uma notação para os objetos do javascript.
// o JSON não deixa colocarmos a vírgula no fim.
// O meu front vai fazer um request e o back um retorno para a informação requerida.
// tcp/ip = protocolos, texto e dados binários