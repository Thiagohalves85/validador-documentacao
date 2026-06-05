# Rejeições por documento: MDF-e

Tabela pública de apoio com código da rejeição, descrição resumida e orientação de correção.

## Estrutura da tabela

- Código da rejeição
- Descrição da rejeição
- Como corrigir a rejeição

| Código | Descrição da rejeição | Solução da rejeição |
|---|---|---|
| `203` | Emissor não habilitado para | Regularizar o credenciamento/habilitação do emitente, transportador, marketplace ou ator envolvido antes de reenviar. |
| `220` | MDFe autorizado há mais de 24 | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `222` | Protocolo de Autorização de Uso difere do cadastrado | Usar o número de protocolo correto retornado/autorizado pela SEFAZ e garantir que ele corresponda ao documento referenciado. |
| `229` | IE do emitente não informada | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `249` | UF da Chave de Acesso diverge da UF autorizadora | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `301` | O NCM do produto predominante da | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `302` | As informações de pagamento devem | Recalcular valores de pagamento/cobrança, informar grupos obrigatórios e corrigir coerência entre total, troco, cartão e duplicatas. |
| `303` | Dados Bancários e de pagamento | Recalcular valores de pagamento/cobrança, informar grupos obrigatórios e corrigir coerência entre total, troco, cartão e duplicatas. |
| `304` | CIOT deve ser informado para TAC e | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `518` | Chave de acesso do CTe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `519` | Chave de acesso da NFe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `520` | Chave de acesso de MDFe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `521` | Placa de veículo inválida | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `522` | Placa informada no veículo | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `523` | Pelo menos um reboque | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `524` | Prestação parcial só pode | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `525` | Chave de acesso da NFe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `526` | Chave de acesso da NFe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `527` | Chave de acesso da NFe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `528` | NFe informada em | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `529` | NFe de prestação parcial | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `530` | NFe informada em | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `632` | O autor do evento diverge do | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `636` | O número sequencial do evento é maior que o permitido | Verificar o tipo do evento, a ordem, a autoria e o prazo permitido; então reenviar com o vínculo correto ao documento principal. |
| `684` | CIOT obrigatório para | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `723` | O tipo do proprietário do MDF-e deve ser do tipo TAC Agregado | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `724` | Grupo de informações do pagamento a prazo deve ser informado | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `725` | Grupo produto predominante deve ser informado para modal rodoviário | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `726` | O grupo de informações da carga lotação deve ser informado | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `727` | CNPJ/CPF do responsável pelo pagamento do frete inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `728` | CNPJ da instituição de pagamento eletrônico do frete inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `729` | Grupo de informações do pagamento a prazo não deve ser informado | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `731` | A categoria de combinação veicular deve ser preenchida para o grupo vale pedágio | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `732` | CNPJ do fornecedor do vale pedágio inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `733` | CNPJ do Fornecedor do Vale Pedágio inexistente na base da ANTT | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `734` | CNPJ / CPF do responsável pelo pagamento do vale pedágio inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `735` | Número da parcela inválido [nParcela:999] | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `736` | Data de vencimento da parcela menor que a data de emissão [nParcela:999] | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `737` | Data de vencimento da parcela menor que a data da parcela anterior [nParcela: 999] | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `738` | Somatório do valor das parcelas diferente do valor do contrato | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `739` | Valor do adiantamento não pode ser informado para pagamento a vista | Recalcular valores de pagamento/cobrança, informar grupos obrigatórios e corrigir coerência entre total, troco, cartão e duplicatas. |
| `740` | O proprietário do veículo quando informado deve ser diferente do emitente do MDF-e | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `741` | O contratante deve ser igual ao emitente do MDF-e quando indicado proprietário do veículo | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `742` | Contratante informado duplicado [Contratante: 99999999999] | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `743` | O tipo de transportador deve ser TAC quando informado CPF do proprietário do veículo de tração | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `744` | O tipo de transportador deve ser ETC ou CTE quando informado CNPJ do proprietário do veículo de tração | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `745` | O tipo de transportador não ser informado quando não estiver informado proprietário do veículo de tração | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `746` | A soma dos componentes do pagamento deve ser igual ao valor do contrato | Recalcular valores de pagamento/cobrança, informar grupos obrigatórios e corrigir coerência entre total, troco, cartão e duplicatas. |
| `902` | Grupo de informações do pedido de emissão da NFF deve ser preenchido apenas para forma de emissão NFF | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `903` | Lote de MDF-e não pode conter MDF-e do Regime Especial da Nota Fiscal Fácil | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `904` | Evento de emitente do MDF-e do Regime Especial da Nota fiscal fácil deve ser transmitido exclusivamente | Verificar o tipo do evento, a ordem, a autoria e o prazo permitido; então reenviar com o vínculo correto ao documento principal. |
| `909` | CNPJ do PAA inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `910` | Emissão por PAA deve ser do tipo e | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `911` | Provedor de Assinatura e | Gerar novamente o QR Code/assinatura com os parâmetros da versão exigida pela NT e garantir aderência ao documento fiscal. |
| `912` | Emitente não associado ao PAA | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `914` | CNPJ do PAA inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `915` | Provedor de Assinatura e | Gerar novamente o QR Code/assinatura com os parâmetros da versão exigida pela NT e garantir aderência ao documento fiscal. |
| `916` | Emitente não associado ao PAA | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `917` | Emissão por PAA deve ser assinada | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `959` | Assinatura RSA inválida | Gerar novamente o QR Code/assinatura com os parâmetros da versão exigida pela NT e garantir aderência ao documento fiscal. |
