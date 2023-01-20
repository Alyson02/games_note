>## Api para gerenciar anotações de games que você jogou ou não

## Criar anotação

```http
POST /gamenotes
```

## Body
```javascript
{
  "gameNome": "Elden Ring",
  "nota": "10",
  "anotacao": "Obra prima",
  "terminou": true
}
```
---

## Atualizar anotação

```http
PUT /gamenotes/id
```

## Body
```javascript
{
  "gameNome": "Elden Ring",
  "nota": "10",
  "anotacao": "Obra prima",
  "terminou": true
}
```
---

## Listar anotações

```http
GET /gamenotes?gameNome=Lol
```

---

## Pesquisar anotação

```http
GET /gamenotes/id
```

---

## Excluir anotação

```http
DELETE /gamenotes/id
```

---

>## Para executar:

1. Instale as dependências

```console
npm i
```

2. Abra o aquivo `db.sql` em `src` e configure para o seu banco local postgres

3. Execute o processo de dump usando o arquivo `dump.sql`

4. Agora é só executar com
```console
npm run dev
```

