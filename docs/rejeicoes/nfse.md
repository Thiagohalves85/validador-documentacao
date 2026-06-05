# Rejeições por documento: NFS-e Nacional

Tabela pública de apoio com código da rejeição, descrição resumida e orientação de correção.

## Estrutura da tabela

- Código da rejeição
- Descrição da rejeição
- Como corrigir a rejeição

| Código | Descrição da rejeição | Solução da rejeição |
|---|---|---|
| `E0812` | O CNPJ do autor do pedido de registro de evento não corresponde à base do CNPJ informada no certificado digital da assinatura do pedido. | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `E0813` | O CNPJ autor informado no pedido de registro de evento não corresponde ao \ | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `E0815` | O CPF do autor do pedido de registro de evento não corresponde ao CPF informado no certificado digital da assinatura do pedido. | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `E1260` | O prazo de aceitação da versão do leiaute da NFS-e expirou. | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `E1268` | Chave de acesso informada para a NFS-e já foi compartilhada com o ADN. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E1274` | O ambiente gerador da NFS-e não está de acordo com a definição 1 (Sistema Próprio do Município) ou 2 (Sefin Nacional). | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E1276` | A informação do processo de emissão de NFS-e é exclusiva para notas emitidas pela Sefin Nacional NFS-e. O município não deve informar este campo nas NFS-e compartilhadas com o ADN NFS-e. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E1280` | CNPJ informado para o emitente da NFS-e é inválido (verificar DV). | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `E1282` | O CNPJ do emitente não corresponde ao CNPJ do informado conforme o tipo de emitente informado na DPS. | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `E1284` | CPF informado para o emitente da NFS-e é inválido (verificar DV). | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `E1285` | O CPF do emitente não corresponde ao CPF do informado conforme o tipo de emitente informado na DPS. | Conferir o documento informado, corrigir dígitos verificadores, remover formatação indevida e alinhar com o cadastro/autorização da SEFAZ. |
| `E1286` | O código do município do emitente da NFS-e difere do código do municipio emissor informado na NFS-e. | Alinhar o valor do campo com a chave, protocolo, cadastro, cálculo ou dado de referência exigido pela SEFAZ. |
| `E1300` | Não é permitido informar alíquota aplicada superior a 5%. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E1301` | Não é permitido informar o código do local de incidência quando o campo referente à tributação do ISSQN indicar imunidade, exportação ou não incidência. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E1302` | Exceto para o campo vLiq, não é permitido informar os demais campos do grupo valores para prestador de serviço optante do simples nacional do tipo MEI. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1303` | Exceto para o campo vLiq, não é permitido informar os demais campos do grupo valores quando o campo referente à tributação do ISSQN indicar imunidade, exportação ou não incidência. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1305` | É obrigatório informar o código do local de incidência quando o campo referente à tributação do ISSQN indicar Operação Tributável. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1307` | Exceto para o campo vLiq, não é permitido informar os demais campos do grupo valores quando o prestador de serviço possui algum regime especial de tributação. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1309` | O código do local de incidência do ISSQN não existe conforme a tabela de municípios IBGE ou tabela de concessões de rodovia ou tabela de localidade geral no ANEXO_A-MUNICIPIO_IBGE-PAISES_ISO2-SNNFSe. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E1311` | Exceto para o campo vLiq, não é permitido informar os demais campos do grupo valores quando a exigibilidade da tributação do ISSQN estiver suspensa por decisão judicial ou administrativa. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1327` | É obrigatório informar a descrição do local de incidência quando o código do local de incidência (cLocIncid) for informado. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1329` | Não é permitido informar a descrição do local de incidência quando o código do local de incidência (cLocIncid) não for informado. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E1515` | É obrigatório informar o grupo de informações de IBS/CBS da NFS-e quando o grupo de informações de IBS/CBS da DPS for informado. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1517` | Não é permitido informar o grupo de informações de IBS/CBS da NFS-e quando o grupo de informações de IBS/CBS da DPS não for informado. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1522` | O percentual redutor para compras governamentais (IBS/CBS) não deve ser informado. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1523` | O percentual redutor para compras governamentais (IBS/CBS) deve ser informado. | Preencher o grupo/campo obrigatório com os valores exigidos pelo leiaute e pela regra de negócio da NT. |
| `E1843` | A data de emissão do pedido do registro do evento não pode ser posterior à data de recebimento pelo Sistema Nacional NFS-e. | Corrigir data/hora, timezone e janela de prazo do evento/documento conforme a NT e reenviar dentro do período permitido. |
| `E3316` | Certificado de Transmissão Inválido | Conferir o código/valor informado contra a tabela oficial, ajustar para um valor válido e reenviar. |
| `E3317` | Certificado de Transmissão expirado | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E3319` | Certificado de Transmissão - Erro de acesso a LCR | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E3321` | Certificado de Transmissão - Erro Cadeira de Certificação | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E4000` | Versão do leiaute. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E4001` | \ | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E4002` | Código IBGE do município do contribuinte. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E4004` | Identificador do parâmetro a ser manutenido. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
| `E4005` | Tipo de ambiente. | Revisar o XML e a regra citada na NT/MOC do documento, corrigir os campos envolvidos e reenviar após nova validação local. |
