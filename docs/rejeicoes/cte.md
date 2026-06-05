# Rejeições por documento: CT-e

Tabela pública de apoio com código da rejeição, descrição resumida e orientação de correção.

## Estrutura da tabela

- Código da rejeição
- Descrição da rejeição
- Como corrigir a rejeição

| Código | Descrição da rejeição | Solução da rejeição |
|---|---|---|
| `203` | Emissor não habilitado para emissão do BPe | Regularizar o credenciamento/habilitação do emitente, transportador, marketplace ou ator envolvido antes de reenviar. |
| `204` | Duplicidade de BPe | Consultar a chave no autorizador, evitar reenvio do mesmo documento já recebido e decidir entre consulta, cancelamento ou nova numeração. |
| `207` | CNPJ do emitente inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `209` | IE do emitente inválida | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `212` | Data/hora de emissão BPe posterior a data/hora | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `216` | Chave de Acesso difere da cadastrada | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `217` | BPe não consta na base de dados da SEFAZ | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `218` | BPe já está cancelado na base de dados da SEFAZ | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `220` | Vedado cancelamento de BPe com data/hora de | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `221` | Prazo para geração do evento de não embarque | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `222` | Protocolo de Autorização de Uso difere do cadastrado | Usar o número de protocolo correto retornado/autorizado pela SEFAZ e garantir que ele corresponda ao documento referenciado. |
| `224` | BPe já está substituído na base de dados da | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `226` | Código da UF do Emitente diverge da UF | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `228` | BPe com Data-Hora de Emissão muito atrasada | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `233` | Código da UF do emitente difere da Sigla da UF | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `234` | Evento de não embarque deve ser posterior a data-hora | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `236` | Chave de Acesso inválida | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `239` | Versão informada para a BPe não suportada | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `243` | XML Malformado | Validar o XML contra o XSD vigente, corrigir namespace/estrutura/tags obrigatórias e reenviar o documento. |
| `244` | Falha na descompactação da área de dados | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `247` | Sigla da UF do Emitente diverge da UF | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `252` | Ambiente informado diverge do Ambiente de | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `253` | Digito Verificador da chave de acesso composta | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `280` | Certificado Transmissor inválido | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `281` | Certificado Transmissor Data Validade | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `282` | Certificado Transmissor sem CNPJ | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `283` | Certificado Transmissor - erro Cadeia de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `284` | Certificado Transmissor revogado | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `285` | Certificado Transmissor difere ICP-Brasil | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `286` | Certificado Transmissor erro no acesso a LCR | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `290` | Certificado Assinatura inválido | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `291` | Certificado Assinatura Data Validade | Gerar novamente o QR Code/assinatura com os parâmetros da versão exigida pela NT e garantir aderência ao documento fiscal. |
| `292` | Certificado Assinatura sem CNPJ | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `293` | Certificado Assinatura - erro Cadeia de | Gerar novamente o QR Code/assinatura com os parâmetros da versão exigida pela NT e garantir aderência ao documento fiscal. |
| `294` | Certificado Assinatura revogado | Gerar novamente o QR Code/assinatura com os parâmetros da versão exigida pela NT e garantir aderência ao documento fiscal. |
| `295` | Certificado Assinatura difere ICP-Brasil | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `296` | Certificado Assinatura erro no acesso a LCR | Gerar novamente o QR Code/assinatura com os parâmetros da versão exigida pela NT e garantir aderência ao documento fiscal. |
| `297` | Assinatura difere do calculado | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `298` | Assinatura difere do padrão do Projeto | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `303` | Grupo Estorno de Crédito não deve ser | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `304` | Grupo Estorno de Crédito deve ser | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `305` | Total de IBS estornado difere da soma dos | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `306` | Total de CBS estornada difere da soma dos | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `310` | IBS / CBS não informado | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `311` | CST informado inexistente | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `312` | Classificação Tributária informada | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `313` | Classificação Tributária incompatível com | Remover o campo/grupo indevido ou ajustar a combinação de campos para o cenário permitido pela regra. |
| `314` | Grupo IBS/CBS não deve ser preenchido | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `315` | Grupo IBS/CBS deve ser preenchido para o | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `316` | Alíquota do IBS da UF inválida | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `317` | Total de IBS difere do calculado | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `318` | Valor do IBS UF difere do calculado | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `319` | CST informado obriga informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `320` | Valor do Diferimento da UF difere do | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `321` | Alíquota do IBS do Município inválida | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `322` | Classificação Tributária não permite | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `323` | Valor do IBS Municipal difere do calculado | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `324` | CST informado obriga informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `325` | Valor do Diferimento do Município difere do | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `326` | Alíquota da CBS inválida | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `327` | Valor do CBS difere do calculado | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `328` | CST informado obriga informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `329` | Valor do Diferimento do CBS difere do | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `330` | Classificação Tributária informada obriga | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `331` | CST informado no grupo de tributação | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `332` | Classificação Tributária informada no grupo | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `333` | Valor da tributação regular da UF difere do | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `334` | Valor da tributação regular do Município | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `335` | Valor da tributação regular da CBS difere | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `347` | DFe de compra governamental e alíquota | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `348` | Total de IBS/CBS só deve ser informado | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `349` | Total de IBS/CBS deve ser informado se | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `350` | Total de Diferimento do IBS UF difere da | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `351` | Total Devolvido do IBS UF difere da soma | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `352` | Total de IBS UF difere da soma dos itens | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `353` | Total de Diferimento do IBS Municipal | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `354` | Total Devolvido do IBS Municipal difere da | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `355` | Total de IBS Municipal difere da soma dos | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `356` | Total do IBS difere da soma do IBS UF e | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `357` | Total de Diferimento do CBS difere da soma | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `358` | Total Devolvido do CBS difere da soma dos | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `359` | Total de CBS difere da soma dos itens | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `360` | Total do DFe de preenchimento | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `365` | Total do DFe inválido | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `366` | CST informado ou compras governamentais | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `367` | CST informado não permite informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `368` | CST informado não permite informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `369` | CST informado ou compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `370` | O CTe Simplificado deve ter a | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `371` | Tipo de contratação deve ser informado | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `372` | Dutoviário com tipo de contratação ponto | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `373` | Dutoviário com tipo de contratação | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `374` | Dutoviário com tipo de contratação | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `375` | DCe duplicada no CTe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `376` | Chave de acesso da DCe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `377` | DCe inexistente na base de | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `378` | DCe com diferença de Chave de | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `379` | DCe não pode estar cancelada | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `380` | UF e Município de Fim da | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `381` | CST informado não permite informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `382` | CST informado não permite informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `383` | CST informado ou compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `384` | CST informado não permite informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `385` | CST informado não permite informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `388` | Classificação Tributária do IBS/CBS não | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `389` | Percentual de redução de alíquota da UF | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `390` | Valor da Alíquota Efetiva do IBS da UF | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `391` | Percentual de redução de alíquota do | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `392` | Valor da Alíquota Efetiva do IBS do | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `393` | Percentual de redução de alíquota da CBS | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `394` | Valor da Alíquota Efetiva da CBS calculado | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `395` | Valor do IBS UF não pode resultar | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `396` | Valor do IBS Municipal não pode resultar | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `397` | Valor do CBS não pode resultar negativo | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `398` | Grupo de informações da composição do | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `399` | Grupo de informações da composição do | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `400` | Somas dos valores de IBS e CBS em | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `401` | Valor de desconto deve ser informado quando | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `402` | XML da área de dados com codificação diferente | Validar o XML contra o XSD vigente, corrigir namespace/estrutura/tags obrigatórias e reenviar o documento. |
| `403` | Valor pago difere do Valor Total | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `404` | Uso de prefixo de namespace não permitido | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `405` | Município de início da viagem inexistente | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `406` | Município de fim da viagem inexistente | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `407` | Código de Município diverge da UF do Emitente | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `408` | Município do Emitente inexistente | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `409` | Código de Município diverge da UF de início da | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `410` | Código de Município diverge da UF de fim da | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `411` | Código de Município inválido para viagem ao | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `412` | Documento autorizado ao XML duplicado no BPe | Validar o XML contra o XSD vigente, corrigir namespace/estrutura/tags obrigatórias e reenviar o documento. |
| `413` | Consulta a uma Chave de Acesso muito antiga | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `415` | Data e Justificativa de entrada em contingência | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `416` | Data e Justificativa de entrada em contingência | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `417` | Data de entrada em contingência posterior ou | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `418` | UF do Emitente não permite emissão Off-line | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `419` | Viagem sem conexão com trecho inválido | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `420` | Viagem com conexão com um dos trechos | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `422` | CNPJ do comprador inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `423` | CPF do comprador inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `424` | Código de Município diverge da UF de localização | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `425` | Município do comprador inexistente | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `426` | Código de Município inválido para comprador | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `427` | IE do comprador inválida | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `431` | CNPJ da Agência inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `432` | Código de Município diverge da UF de localização | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `433` | Município da Agência inexistente | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `434` | Valor total do bilhete superior ao limite permitido | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `436` | Valor da soma dos componentes não corresponde | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `437` | Descrição do Tipo do desconto deve ser informada | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `438` | BPe com somatório dos | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `439` | Grupo BPe de Substituição deve ser informado | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `440` | Grupo BPe de Substituição não deve informado | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `441` | Passageiro deve ser informado para o tipo de | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `442` | Dados do passageiro não devem ser informados | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `443` | Comprador deve ser informado para BPe Múltiplo | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `444` | BPe Normal e Múltiplo exigem informação de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `445` | BPe vincula a BPe Múltiplo exige a informação da | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `446` | Chave de acesso do BPe múltiplo inválida | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `447` | BPe múltiplo inexistente | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `448` | BPe múltiplo com diferença de Chave de Acesso | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `449` | BPe a ser substituído inexistente | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `450` | BPe substituído com diferença de Chave de | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `451` | BPe a ser substituído deve estar na situação | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `452` | BPe a ser substituído não pode ter sido substituído | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `453` | BPe a ser substituído com data/hora de embarque | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `454` | CNPJ do emitente do BPe substituto deve ser | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `455` | IE do emitente do BPe substituto deve ser igual à | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `456` | CNPJ/CPF do comprador do BPe substituto deve | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `458` | UF e Município de início e fim da viagem do BPe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `466` | CNPJ autorizado para download inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `467` | CPF autorizado para download inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `469` | O BPe substituído deve ser do modal aéreo | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `470` | O BPe substituído não pode ser do modal aéreo | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `471` | BPe múltiplo deve estar na situação Autorizado o | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `472` | BPe múltiplo não pode ter sido substituído | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `473` | O BPe múltiplo deve ser do modal aéreo | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `474` | CNPJ do emitente do BPe múltiplo deve ser igual | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `475` | Não informados os dados do cartão de | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `476` | IE do emitente do BPe substituto deve ser igual à | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `477` | Pagamento com cartão de crédito em sistema de | Recalcular valores de pagamento/cobrança, informar grupos obrigatórios e corrigir coerência entre total, troco, cartão e duplicatas. |
| `478` | Não informados os dados da operação de | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `479` | Endereço do site da UF da Consulta via QR Code | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `481` | Parâmetro do QR Code divergente do BPe | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `482` | Parâmetro sign não informado no QR Code para | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `484` | A data-hora da conexão deve ser informada para | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `485` | A data-hora da conexão não deve ser informada | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `486` | A data-hora da conexão deve ser maior que a | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `488` | Parâmetro sign não deve ser informado no QR | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `496` | Assinatura do QR-Code difere do calculado | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `497` | CPF do passageiro inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `500` | O tipo do desconto deve ser informado | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `501` | Valor do BPe sem desconto deve ser maior que | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `502` | CNPJ da credenciadora do cartão inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `503` | Código do Município inválido para Agência do | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `504` | Cancelamento não permitido, BPe possui evento de não | Verificar o tipo do evento, a ordem, a autoria e o prazo permitido; então reenviar com o vínculo correto ao documento principal. |
| `505` | UF de início da viagem deve ser igual a UF do | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `508` | Chave de acesso do BPe substituído inválida | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `510` | CNPJ do responsável técnico inválido (zerado ou | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `539` | Duplicidade de BPe, com diferença na Chave de | Consultar a chave no autorizador, evitar reenvio do mesmo documento já recebido e decidir entre consulta, cancelamento ou nova numeração. |
| `598` | Usar somente o namespace padrão do BPe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `599` | Não é permitida a presença de caracteres de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `600` | Chave de Acesso difere da existente em BD | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `601` | Quantidade de documentos | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `617` | UF do tomador não aceita | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `627` | CNPJ do autor do evento inválido | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `629` | O tpEvento informado inválido | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `632` | O autor do evento diverge do emissor do BPe | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `633` | O autor do evento não é um órgão autorizado a | Verificar o tipo do evento, a ordem, a autoria e o prazo permitido; então reenviar com o vínculo correto ao documento principal. |
| `636` | O número sequencial do evento é maior que o permitido | Verificar o tipo do evento, a ordem, a autoria e o prazo permitido; então reenviar com o vínculo correto ao documento principal. |
| `704` | Vedado cancelamento de BPe com data/hora maior que | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `708` | Tipo de evento inválido para BPe TA | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `709` | Tipo de evento inválido para BPe e BPe TM | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `739` | O CTe substituído deve possuir | Consultar o status do documento na SEFAZ e não repetir operação incompatível; emitir novo documento ou usar o evento correto. |
| `759` | O CST deve ser 00 para CTe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `933` | Chave de acesso do CTe | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1004` | Chave de acesso referenciada não deve | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1005` | Deverá ser informada uma chave de | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1006` | Chave de acesso referenciada em | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1007` | DFe referenciado em compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1008` | DFe referenciado em compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1009` | DFe referenciado em compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1010` | DFe referenciado em compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1011` | DFe referenciado em compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1012` | DFe referenciado em compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1013` | DFe referenciado em compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1014` | DFe referenciado em compras | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `1024` | Tamanho da mensagem excedeu o limite | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `2025` | Ano do BPe informado na chave de acesso | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `G024` | G024 Rejeitar quando informado tomador como Contribuinte | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `H093` | H093 Rejeitar quando informado tomador como Contribuinte | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
