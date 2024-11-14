# Teste Técnico Grupo Voalle

Foi desenvolvido neste teste técnico um conjunto de 5 microfrontends para atender os requisitos solicitados.

## Simulação de Backend

Para simular o backend, utilizei a ferramenta **Mockoon**, deixando um script para ser executado junto ao projeto, dentro do `package.json` do repositório do host. O comando para iniciar a API mockada é:

```bash
yarn apiMock

ou

npm run apiMock
```

Para iniciar os modulos entre em cada um dos repositorios e execute:

```bash
yarn start

ou

npm run start
```

Todos os módulos devem ser executados

## Estrutura de Repositórios

Dado o requisito de que os times não devem ter acesso ao código fonte de outros microfrontends, criei os 5 seguintes repositórios:

- **Host**: [microfrontend-host](https://github.com/brunoc-cardoso/microfrontend-host)  
  Responsável por gerenciar todos os microfrontends.
- **News**: [microfrontend-news](https://github.com/brunoc-cardoso/microfrontend-news)  
  Gerencia a exibição das notícias e emite eventos para os outros microfrontends.
- **Sponsors**: [microfrontend-sponsors](https://github.com/brunoc-cardoso/microfrontend-sponsors)  
  Gerencia a exibição de patrocínios.
- **Weather**: [microfrontend-weather](https://github.com/brunoc-cardoso/microfrontend-weather)  
  Exibe informações de clima, recebendo dados via eventos do módulo News.
- **Ads**: [microfrontend-ads](https://github.com/brunoc-cardoso/microfrontend-ads)  
  Exibe anúncios baseados no clima, usando parâmetros do módulo News.

## Tecnologias Utilizadas

Optei por tecnologias que equilibram velocidade de entrega com familiaridade e que atendem aos requisitos do teste:

- **React**: com Webpack e Module Federation
- **TailwindCSS**: para estilização rápida e eficiente
- **TypeScript**: para maior segurança no código
- **Mockoon**: para simulação do backend

## Linha de Raciocínio

- **Host**: É a âncora do projeto, responsável por orquestrar os microfrontends.
- **News**: Estrutura a exibição das notícias, incluindo uma rota para listagem e outra para o detalhe da notícia. Este módulo também emite eventos através de um `eventBus` para que outros módulos possam escutar e receber dados.
- **Weather**: Recebe dados do News via eventos e os exibe.
- **Sponsors**: Carrega e exibe informações de patrocinadores.
- **Ads**: Exibe anúncios baseados no clima atual, usando dados do News.

## Melhorias Planejadas para a Versão 2

- Adição de testes unitários.
- Painel de administração para gerenciar patrocínios.
- Implementação de autenticação.
- Otimizações de desempenho.
- Tratativas de erros, tanto para api, quanto para o carregamento dos módulos
- Melhoria na tratativa das imagens e responsividade do app como um todo
- Acessibilidade
