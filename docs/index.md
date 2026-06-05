# Validador Fiscal

Documentação funcional pública da aplicação de validação de documentos fiscais.

Este portal publica apenas conteúdo funcional e sanitizado:

- regras de negócio
- orientações de uso
- fluxos operacionais
- documentos suportados
- interpretação de rejeições e alertas

Este portal **não** publica:

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

## Estrutura do portal

- [Fluxos](fluxos/validacao-de-documentos.md)
- [Operação](operacao/cadastro-e-login.md)
- [Regras de negócio](regras/gerais/visao-geral.md)
- [Documentos suportados](regras/gerais/documentos-suportados.md)
- [Rejeições por documento](rejeicoes/indice.md)
- [FAQ](faq/duvidas-frequentes.md)
