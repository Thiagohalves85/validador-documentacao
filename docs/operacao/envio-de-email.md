# Envio de XML e PDF por e-mail

## Objetivo

Permitir que o usuário envie o XML e o PDF do documento fiscal validado para o e-mail cadastrado na própria conta.

## Quando o botão aparece

O botão **Enviar XML + PDF** só aparece quando:

- o usuário está autenticado
- o documento foi validado com sucesso
- o documento possui geração de PDF suportada

## Como funciona

1. O usuário valida o documento.
2. Se a validação for aprovada, o frontend exibe o painel de envio.
3. Ao clicar em **Enviar XML + PDF**, a aplicação cria um job na fila interna.
4. Um worker assíncrono gera o PDF, anexa o XML e faz o envio para o e-mail cadastrado na conta do usuário.

## Regras de negócio

- O destinatário não é digitado manualmente na tela.
- O e-mail de envio é o mesmo cadastrado no cadastro da conta do usuário.
- Se o documento não for válido, o botão não aparece.
- O envio não bloqueia a interface enquanto a mensagem é processada.

## Credenciais e integração

O envio depende de uma configuração SMTP de ambiente:

- `EMAIL_SMTP_HOST`
- `EMAIL_SMTP_PORT`
- `EMAIL_SMTP_USERNAME`
- `EMAIL_SMTP_PASSWORD`
- `EMAIL_SMTP_FROM`
- `EMAIL_SMTP_USE_TLS`

## Resultado esperado

Quando tudo estiver correto:

- o usuário vê a confirmação de que o e-mail foi enfileirado
- o destinatário recebe o XML e o PDF em anexo
- a aplicação continua respondendo normalmente

## Quando o envio falha

Se o SMTP devolver erro ou a entrega não puder ser concluída:

- a interface mostra uma mensagem mais amigável para o usuário
- o erro técnico é registrado para análise
- o XML do documento e o resumo do erro são enviados ao Google Drive
- a organização de pastas segue a mesma regra usada nas notas fiscais:
  - pasta do usuário
  - pasta do tipo de documento
  - pasta da chave ou identificador do documento

Isso facilita a investigação sem interromper o fluxo principal da aplicação.
