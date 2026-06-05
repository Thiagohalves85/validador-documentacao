# Resultados e rejeições

## Tipos de retorno

### Sucesso

Indica que o documento passou pelas validações executadas no fluxo atual.

### Rejeição

Indica erro bloqueante. O documento precisa ser corrigido antes de seguir para a próxima etapa operacional.

### Alerta

Indica ponto de atenção. Nem sempre bloqueia o uso, mas pede revisão.

## Estratégia recomendada

1. Corrija a primeira rejeição bloqueante.
2. Valide novamente.
3. Revise alertas remanescentes.
4. Só gere arquivos auxiliares ou resultados complementares quando o documento estiver consistente.

## Exemplos frequentes de causa

- campo obrigatório ausente
- documento de identificação inválido
- valor incompatível com total
- código fiscal ou tributário incompatível
- data fora da regra esperada
- estrutura XML incompatível com o documento informado

## Leitura prática do resultado

Ao receber uma rejeição, o usuário deve:

- localizar o campo citado
- revisar o contexto do documento
- ajustar o conteúdo de origem
- executar nova validação

## Observação

As listas completas de regras e rejeições operacionais devem ser mantidas em materiais controlados pela equipe responsável e revisadas periodicamente.
