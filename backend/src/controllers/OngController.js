const crypto = require('crypto');   //gerar número aleatório
const connection = require('../database/connection');

//          ***Controlador de Ongs***

module.exports = { 
    async index(request, response) {
        const ongs = await connection('ongs').select('*'); //selecionar todas ongs cadastradas
        
        return response.json(ongs);
    },
//=================================================================================================
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //gerar número aleatório, e converte em string hexadecimal

        await connection('ongs').insert({ //await para aguardar finalizar para então continuar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

    return response.json({ id }); 
    }
};

