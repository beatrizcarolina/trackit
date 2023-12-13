# TrackIt
Aplicação front-end criada em React com Vite. Nesta aplicação é possível realizar cadastro e login, adicionar e excluir hábitos, rastrear as atividades do usuário no dia atual e verificar o histórico do usuário.

# Demo 
[Link do projeto](https://projeto11-trackit-eosin-gamma.vercel.app/)

# Como funciona?
Este projeto é uma aplicação front-end criada em React com Vite e que tem como objetivo rastrear hábitos do usuário. Possui 5 telas, topo e menu de navegação fixos. No topo é exibida a foto do usuário. No menu existem 3 botões (Hábito, Hoje e Histórico) que redirecionam o usuário para suas telas, no botão Hoje é exibido uma barra de progresso circular indicando a porcentagem de conclusão de hábitos de hoje do usuário. As telas funcionam da seguinte maneira:

#### Tela de Login
- Possui inputs de email e senha para serem enviados para API;
- Em caso de sucesso o usuário é redirecionado para tela "Hoje";
- Em caso de falha é exibido um alerta informando o erro para o usuário;
- Ao clicar no link para se cadastras, o usuário é redirecionado para a tela de cadastro.

#### Tela de Cadastro
- Possui inputs de email, senha, nome e foto para serem enviados para API;
- Em caso de sucesso, o usuário é redirecionado para tela de login;
- Em caso de falha é exibido um alerta informando o erro para o usuário;
- Ao clicar no link para logar, o usuário deve ser redirecionado para a tela de login.

#### Tela Hábitos 
- Carrega os hábitos do usuário, caso o usuário não tenha nenhum hábito é exibida uma mensagem informando que não há nenhum hábito cadastrado;
- É possível deletar um hábito, é exibida uma caixa de diálogo para confirmar se o usuário gostaria realmente de apagar o hábito. Em caso afirmativo, é enviado um request para API e os hábitos são recarregados logo em seguida;
- Ao clicar no botão de "+", é exibido um formulário de cadastro de hábito logo abaixo do título. O usuário deve inserir o nome do hábito em um campo de texto e selecionar os dias da semana que deseja realizar o hábito. Ao salvar, os dados são enviados para API. Em caso de sucesso, o formulário é escondido novamente e a lista de hábitos é recarregada. Em caso de erro, um alerta indica o problema para o usuário.

#### Tela Hoje
- É exibido a data do dia atual;
- Carrega os hábitos do usuário;
- Exibe "Nenhum hábito concluído ainda" ou "x% dos hábitos concluídos", dependendo do progresso do usuário;
- Ao marcar um hábito como concluído, é colocada em verde a contagem da sequência atual;
- Caso a sequência atual seja igual ao recorde do usuário e maior que zero, este também é exibido em verde;

#### Tela Histórico
- Exibido "Em breve você poderá ver o histórico dos seus hábitos aqui!";
- Em uma implementação futura será exibido um calendário, onde em verde serão os dias em que o usuário completrou todos os hábitos que deveria ter completado. Já os dias que o usuário tinha hábitos para completar, porém não completou todos, serão destacados em vermelho. Por fim, os dias que o usuário não tinha nenhum hábito a concluir, não serão destacados.

# Motivação 
Construir uma aplicação completa de acompanhamento de hábitos em React com Vite, utilizando a arquitetura SPA, Styled Components para lidar com alterações de CSS, Axios para realizar a conexão com a API, ContextAPI para estados globais, SweetAlert2 para gerenciar os alertas e bibliotecas React para oferecer uma excelente experiência ao usuário.

# Tecnologias Utilizadas
Para este projeto foram utilizadas:

  - React;
  - Vite;
  - Axios;
  - Eslint;
  - Styled Components;
  - Dayjs;
  - React Circular Progress Bar;
  - React Loader Spinner;
  - React Router.

# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento é necessário seguir os passos abaixo:

- Clonar o repositório;
- Baixar as dependências necessárias com o comando: `npm install`;
- Para rodar o projeto em desenvolvimento, execute o comando `npm run dev`.
