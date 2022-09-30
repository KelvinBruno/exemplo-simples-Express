# exemplo-simples-Express

Exemplos simples do Express

# Configurando e testando o nodemon

Com o nodemon adicionado ao projeto, podemos executá-lo com o comando: $ yarn nodemon ./src/index.js

Com isso nossa aplicação será reinicializada a cada alteração feita ao nosso projeto. Você pode testá-lo modificando a string "Hello, world!" dentro do arquivo src/index.js na linha 7.

Mas podemos simplificar a execução do nodemon utilizando os scripts que o Node.JS nos possibilita criar, para isso abra seu arquivo package.json, e adicione as linhas:

    "scripts": {
      "dev": "nodemon ./src/index.js"
    },

O script possibilita a execução do nodemon com este simples comando: $ yarn dev

# Configurando e testando o sucrase

Para utilizarmos o sucrase e os benefícios que ele traz, precisamos criar um arquivo na pasta raiz do projeto, o nodemon.json com a seguinte estrutura:
{
"execMap": {
"js": "node -r sucrase/register"
}
}

Pronto! Na próxima vez que executarmos o nodemon, ele irá utilizar o sucrase como transpilador, possibilitando a utilização da sintaxe import e export.

Para colocar o sucrase em prática, vamos refatorar o nosso código no arquivo src/index.js, mude o require para import, ele deve ter o seguinte resultado:

    import express from "express"
