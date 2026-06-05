# Validador Fiscal

Documentação funcional pública da aplicação de validação de documentos fiscais.

Este repositório público contém apenas:

- regras de negócio
- orientações de uso
- tipos de documento suportados
- interpretação de rejeições e alertas

Este repositório **não** publica:

- código-fonte
- detalhes de infraestrutura
- fluxos de deploy
- credenciais
- endpoints internos
- configurações sensíveis

## Fluxo de uso ponta a ponta

```mermaid
flowchart TD
    A["Acessar a aplicação"] --> B["Fazer login"]
    B --> C["Colar, enviar ou arrastar o documento"]
    C --> D["Aplicação identifica o tipo do documento"]
    D --> E["Usuário executa a validação"]
    E --> F{"Existem rejeições?"}
    F -->|Sim| G["Revisar código, descrição e orientação de correção"]
    G --> H["Corrigir o documento de origem"]
    H --> C
    F -->|Não| I{"Há recurso complementar para o documento?"}
    I -->|Sim| J["Executar recurso complementar, quando aplicável"]
    J --> K["Validar novamente após o processamento"]
    K --> L{"Resultado final aprovado?"}
    I -->|Não| L
    L -->|Não| G
    L -->|Sim| M["Gerar PDF auxiliar, quando disponível"]
    M --> N["Baixar XML ou resultado final"]
    N --> O["Encerrar análise"]
```

## Índice

- [Como usar](como-usar.md)
- [Regras de negócio](regras-de-negocio.md)
- [Documentos suportados](documentos-suportados.md)
- [Resultados e rejeições](resultados-e-rejeicoes.md)
- [Tabelas de rejeições por documento](tabelas-rejeicoes-por-documento.md)
