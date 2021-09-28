# Plane Controller

**Número da Lista**: 4<br>
**Conteúdo da Disciplina**: D&C<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 18/0018604  | Hugo Sobral de Lima Salomão |
| 18/0021974  | Leonardo da Silva Gomes |

## Sobre 
O funcionamento do Plane Controller consiste na idealização de um cenário imaginário em que administradores de uma companhia aérea precisam gerar relatórios que informa quais são os aviões com o maior risco de colisão em um determinado momento T da trajetória compartilhada da empresa.
Isto é, o Plane Controller é uma aplicação visual que permite ao usuário inserir, em um quadro que representa o mapa mundi, a posição dos diversos aviões que estão no ar em um determinado momento. A partir dos aviões informados, o sistema realiza uma sequência de cálculos para retornar o par de aviões que apresentam o maior risco de colisão, a partir disso, a central de monitoramento pode realizar as tomadas de decisão de rotas com base em um sistema confiável. 

## Screenshots
![image](https://user-images.githubusercontent.com/43852963/135014933-2d301ce9-d647-433a-b719-68e3a88cb559.png)
![image](https://user-images.githubusercontent.com/43852963/135014946-42c84cc8-196a-46be-87c8-3220a8d24cad.png)
![image](https://user-images.githubusercontent.com/43852963/135014964-57908e0f-5c5a-41c9-8893-c1b3d3d5e3ad.png)
![image](https://user-images.githubusercontent.com/43852963/135014975-14bcd53c-4b74-4485-ac6a-427c2e10e5d6.png)

## Instalação 
**Linguagem**: JavaScript<br>
**Framework**: React JS<br>

Para rodar o projeto, você precisa seguir as seguintes instruções:

1. Clonar o repositório
```
git clone https://github.com/projeto-de-algoritmos/DC_PlaneController.git
```

2. Entrar na pasta raíz do projeto e instalar as dependências por meio de:
```
npm install
```
ou então
```
yarn install
```

3. Inicializar a aplicação
```
npm start
```
ou então
```
yarn start
```


## Uso 
O uso do Plane Controller é bastante simples, interativo e objetivo. <br/>
Ao entrar no site, você irá se deparar com a visualização de um mapa. Este mapa é um componente clicável e, a cada clique, você adiciona um avião na sua respectiva posição. <br/>
Quando você finalmente adicionar todos os aviões ao mapa, você deve então clicar no botão ```menor distância``` para que o app possa gerar o relatório e te informar sobre os possíveis riscos de colisão entre aeronaves.

