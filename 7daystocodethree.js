let areaQueVaiSeguir = prompt('Qual aréa gostaria de seguir, Front-End ou Back-End?').toLowerCase();

if (areaQueVaiSeguir == 'back-end') {
    let linguagem = prompt('Otimo! Você escolheu Back-End, agora... Você Gostaria de aprender qual Linguagem? C# ou Java?').toLowerCase();
    if (linguagem == 'c#') {
        alert('Maravilha! Você escolheu aprander Back-End e C#, Otima escolha!');
    } else if (linguagem == 'java') {
        alert('Maravilha! Você escolheu aprander Back-End e C#, Otima escolha!');
    } else {
        alert('Por Favor, digite uma linguagem válida');
    }
} else if (areaQueVaiSeguir == 'front-end') {
    let framework = prompt('Otimo! Você escolheu Front-End, agora... Você Gostaria de aprender qual com framework? React ou Vue?').toLowerCase();
    if (framework == 'react') {
        alert('Maravilha! Você escolheu aprander Front-End juntamente com React, Otima escolha!');
    } else if (framework == 'vue') {
        alert('Maravilha! Você escolheu aprander Front-End juntamente com Vue, Otima escolha!');
    } else {
        alert('Por Favor, digite uma linguagem válida');
    }
} else {
    alert('Por Favor, Escolha um aréa válida');
}

let nivelDeEspecializacao = prompt(`Gostaria de se especializar mais em ${areaQueVaiSeguir}? Ou quer se tornar um Dev Fullstack? Digite 1 para escolher a primeira opção e 2 para a segunda`);

if (nivelDeEspecializacao == '1') {
    alert(`Maravilha! É um grande passo e uma caminhada bem longa pois ${areaQueVaiSeguir} tem muitas aréas a ser aprendida!`);
} else if (nivelDeEspecializacao == '2') {
    alert('Opa! Esse vai ser um caminho arduo e desafiador, mas nada que não possamos superar!');
} else {
    alert('Por Favor! Digite um valor válido!');
}

let gostariaDeAprender = [];

// let tecnologias = prompt('Por fim, Quais tecnologias você gostaria de aprende?');
// gostariaDeAprender.push(tecnologias);
// let resposta = prompt(`Além de ${gostariaDeAprender}, Você gostaria de aprender mais alguma tecnologia? (sim/não)`);


//equanto a resposta for sim o loop cotinuira, caso contrario, aparece uma mensagem mostrando tudo que foi armazenado

while (true) {
    let respostaLoop = prompt('Qual outra tecnologia vc gostaria de aprender?');
    let respostaDois = prompt(`Além de ${gostariaDeAprender},${respostaLoop}, Você gostaria de aprender mais alguma tecnologia? (sim/não)`);

    if (respostaDois.toLowerCase() == 'não') {
       break;
    } else {
        gostariaDeAprender.push(respostaLoop);
    }
}

//console.log('Hello, World!');

 let palavraQuais = gostariaDeAprender.length > 1 ? 'quais' : 'qual';
 let palavraTecnologia = gostariaDeAprender.length > 1 ? 'tecnologias' : 'tecnologia';

 alert(`Muito interessante saber ${palavraQuais} ${palavraTecnologia} você gostaria de aprender, por agora é só isso, tchau tchau!`);
