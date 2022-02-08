function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Favor, envie uma string.');
        setTimeout(() => {            
            resolve(msg);
        }, tempo);
    });    
}
esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('frase 3', rand(1, 3));
    }).then(resposta=> {
        console.log(resposta);
    })
    .catch(e=> {
        console.log('Error', e);
    });

async function executa() {
    try {
        const frase1 = await esperaAi('Frase async 1', rand(1, 3));
        console.log('Terrminando a frase 1', frase1);
        const frase2 = await esperaAi('Frase async 2', rand(1, 3));
        console.log('Terrminando a frase 2', frase2);
        const frase3 = await esperaAi('Frase async 3', rand(1, 3));
        console.log('Terrminando a frase 3', frase3);
    } catch(e) {
        console.log(e);
    }
}
executa();