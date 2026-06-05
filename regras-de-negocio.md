# Regras de negócio

## O que a aplicação confere

A validação combina dois grupos principais:

- estrutura esperada do documento
- consistência dos dados informados

## Exemplos de verificações de negócio

- identificação do emitente
- identificação do destinatário ou tomador
- coerência entre itens e totais
- presença de campos obrigatórios
- compatibilidade entre códigos fiscais e contexto do documento
- consistência de datas, valores e documentos de referência

## Recursos complementares

### RTC

Quando o documento tiver dados suficientes, a aplicação pode processar informações complementares ligadas à Reforma Tributária do Consumo.

Exemplos de dados mínimos normalmente esperados:

- classificação tributária compatível
- base de cálculo identificável
- informações do item ou serviço
- município e data do fato gerador quando aplicável

### NFS-e Nacional

Para cálculo de base em NFS-e, a aplicação depende da presença dos dados essenciais do serviço e das partes envolvidas.

## Resultado esperado

Ao final da análise, o usuário recebe:

- rejeições que impedem continuidade
- alertas que exigem revisão
- confirmação de aprovação quando não há inconsistências bloqueantes
