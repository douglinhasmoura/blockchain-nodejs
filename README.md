# blockchain-nodejs

# 🗒⛓

API em NodeJS utilizando a tecnologia BlockChain.

## Fluxo

Ao chamar a rota principal, retorna o objeto junto com o block que foi criado.

#### Exemplo de chamada:
```json
{
	"name": "Douglas",
	"type": true,
	"status": false
}
```

#### Exemplo de retorno:

```json
{
	"index": 0,
	"prevHash": "0bc3c3e1698a27f26c5bd825bdc79f7cd205040cabad3553921f5436b884cde3",
	"data": {
		"name": "Douglas",
		"type": true,
		"status": false
	},
	"timestamp": "2021-12-27T20:03:54.276Z",
	"hash": "0d403db1ea1efec77d11f3eed437e0b5c7499782029d7c19b25249476fb181df",
	"nonce": 20,
	"difficulty": 1
}

