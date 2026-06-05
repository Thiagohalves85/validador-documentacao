# Rejeições por documento: DCe

Tabela pública de apoio com código da rejeição, descrição resumida e orientação de correção.

## Estrutura da tabela

- Código da rejeição
- Descrição da rejeição
- Como corrigir a rejeição

| Código | Descrição da rejeição | Solução da rejeição |
|---|---|---|
| `203` | Emissor não habilitado para emissão de DC | Regularizar o credenciamento/habilitação do emitente, transportador, marketplace ou ator envolvido antes de reenviar. |
| `230` | Emissão própria com Tipo do Emitente incompatível | Remover o campo/grupo indevido ou ajustar a combinação de campos para o cenário permitido pela regra. |
| `231` | CNPJ da ECT difere do CNPJ do Usuário emitente | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `266` | Transportadora não está habilitada no CCC | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `267` | CNPJ da transportadora inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `268` | Emissão pela Transportadora com Tipo do Emitente incompatível | Remover o campo/grupo indevido ou ajustar a combinação de campos para o cenário permitido pela regra. |
| `269` | Marketplace bloqueado para emissão de DCe | Regularizar o credenciamento/habilitação do emitente, transportador, marketplace ou ator envolvido antes de reenviar. |
| `270` | CNPJ do marketplace inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `271` | Emissão pelo marketplace com Tipo do Emitente incompatível | Remover o campo/grupo indevido ou ajustar a combinação de campos para o cenário permitido pela regra. |
| `277` | Emissão pelo fisco com Tipo do Emitente incompatível | Remover o campo/grupo indevido ou ajustar a combinação de campos para o cenário permitido pela regra. |
| `278` | CNPJ do órgão inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `279` | Sigla da UF do Fisco inexistente | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `407` | Emissão por pessoa física sem informação do | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `503` | Emissão própria com Tipo do Emitente | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `568` | Falha no schema XML – inexiste atributo versao na tag raiz | Validar o XML contra o XSD vigente, corrigir namespace/estrutura/tags obrigatórias e reenviar o documento. |
| `574` | Autor do evento diverge do emissor da DCe | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `578` | A data do evento não pode ser maior que a | Verificar o tipo do evento, a ordem, a autoria e o prazo permitido; então reenviar com o vínculo correto ao documento principal. |
| `629` | Valor do produto difere do resultado do valor | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `700` | Emissão pelos correios, e assinatura diferente dos correios | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `776` | Valor total da DCe acima do permitido [nItem: | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `777` | Valor total bruto do produto acima do | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `778` | Informado NCM inexistente [nItem: nnn] | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `814` | Endereço do site para consulta do QR Code | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
