<div style="display:flex;justify-content:center"><img src="./g33.png" /></div>
<h1 style="font-size:48px;">Projeto Full Stack -Beer Drinks  </h1>
<p style="font-size:18px;padding:0px 25px 10px">Projeto. Desenvolvimento Front-End em Next.js 13, typescript, Tailwind e Back-End em typescript com Node em Express e TypeORM com banco de dados PostgreSQL, consumo de API  no Front-End<a href="https://punkapi.com/documentation/v2" taget="_blank"> Punk API </a> 
</p>

```
Api usada somente para logar no Front-End  http://localhost:3001"
```

#

<h2 style="font-size:32px;color:mediumblue">Como instalar o projeto:</h2>

1. execute o SQL Shell (psql) para criar o banco de dados: <code>CREATE DATABASE <b>NAME<b> </code>

2. Renomeie o arquivo <code>.env.example</code> da pasta <b>/backend</b> para <code>.env</code> e edite com as informações definidas por você na configuração do PostgreSQL
<pre>
< DATABASE_URL=postgres://< username>:< password>@host:< port>/< database>
</pre>

3. Após ter a base de dados criada, execute o <b>Node.js command prompter</b>. Vá até as pastas de <b>/front-aquidev</b> e <b>/back</b> e execute <b>em ambas</b> o comando: <code>npm install</code>

4. Ainda no <b>Node.js command prompter</b>, na pasta <b>/back</b>, execute o comando para persistirem as migrações da API no banco de dados: <code>npm run typeorm migrations:run -- -d .\src\data-source.ts</code>

5. Por fim, em terminais separados, execute <code>npm run dev</code> em <b>/backend</b> e <code>npm run dev</code> em <b>/frontend</b><pre>{
   "api_url":"http://localhost:3001"
   "web_url":"http://localhost:3000",
   }</pre>

<h2 style="font-size:32px;color:mediumblue">Back-End - API:</h2>
# 1 /register

<h2>/register</h2>
<h4><b>/POST </b> Rota disponível sem autenticação ou permissão, usada para cadastro de usuários.</h4>
Request:
<pre>
{
    "name": "jujuba",
    "email": "jujuba@gmail.com",
    "password": "123456",
    "avatar: ""
}
</pre>
Response: <b>201 Created</b>
<pre>
{
	"id": "b3de8861-13e7-4f93-ba07-e0bba2dd59dc",
	"name": "jujuba",
	"email": "jujuba@gmail.com",
	"avatar": null,
	"createdAt": "2023-10-01T17:27:11.340Z",
	"updatedAt": "2023-10-01T17:27:11.340Z"
}
</pre>

# /login

<h4><b>POST:</b> Rota disponível sem autenticação ou permissão, usada para autenticação de usuários.Request:</h4>
<pre>
{
	"email": "jujuba@gmail.com",
	"password": "123456"
}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1anViYUBnbWFpbC5jb20iLCJpYXQiOjE2OTYxODE1NTEsImV4cCI6MTY5NjE4NTE1MSwic3ViIjoiMWNlM2VlZWQtYzlmZS00M2ZlLTg2MTAtNDVjYzZmZWFlZmEyIn0.oeqBiJOSvsXm0nUJeiwZZwxlmZY7G9nkIjQzW3AMNDg"
}
</pre>

# /profile

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar as informações do próprio usuário.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"id": "1ce3eeed-c9fe-43fe-8610-45cc6feaefa2",
	"name": "jujubaa",
	"email": "jujuba@gmail.com",
	"avatar": null,
	"createdAt": "2023-09-30T09:42:29.198Z",
	"updatedAt": "2023-09-30T10:58:12.119Z"
}
</pre>

# /users

<h4><b>GET:</b> Rota disponível somente para usuário autenticado (token), usada para listagem de todos os usuários cadastrados.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
[
	{
		"id": "1ce3eeed-c9fe-43fe-8610-45cc6feaefa2",
		"name": "jujubaa",
		"email": "jujuba@gmail.com",
		"avatar": null,
		"createdAt": "2023-09-30T09:42:29.198Z",
		"updatedAt": "2023-09-30T10:58:12.119Z"
	},
	{
		"id": "fdaa811b-17cf-43db-a1de-02b2e1eacfc1",
		"name": "douglas",
		"email": "douglas@gmail.com",
		"avatar": null,
		"createdAt": "2023-09-30T10:58:38.152Z",
		"updatedAt": "2023-09-30T10:58:38.152Z"
	},
    ...
]
</pre>

# /users/:d

h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar as informações de um usuário pelo id.</h4>
Request:

<pre>
{}
</pre>

Response: <b>200 OK</b>

<pre>
{
	"user": {
		"id": "1ce3eeed-c9fe-43fe-8610-45cc6feaefa2",
		"name": "jujubaa",
		"email": "jujuba@gmail.com",
		"avatar": null,
		"createdAt": "2023-09-30T09:42:29.198Z",
		"updatedAt": "2023-09-30T10:58:12.119Z"
	}
}
</pre>
<br/>
<h4><b>PATCH:</b> Rota disponível somente para usuário autenticado e dono dos dados, usada para atualizar as informações pelo id.</h4>
<pre>
Request:
{
	"name":"testeUpdate",
	"email":"jujuba@gmail.com"
}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"id": "1ce3eeed-c9fe-43fe-8610-45cc6feaefa2",
	"name": "testeUpdate",
	"email": "jujuba@gmail.com",
	"avatar": null,
	"createdAt": "2023-09-30T09:42:29.198Z",
	"updatedAt": "2023-09-30T10:58:12.119Z"
}
</pre>

<br/>
<h4><b>DELETE:</b> Rota disponível para usuário autenticado usada para deletar uma conta de usuário  pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>204 No Content</b>
<pre>
{}
</pre>

# /product

<h4><b>POST</b>: Rota disponível somente para usuário autenticado, usada para criar produto .</h4>
Request:
<pre>
{
	"name": "vodka de jujuba",
	"year": 2010,
	"price": 80.90,
	"description": "e vodka mas parace 51 e as vezes saque",
	"avatar": "vodka"
}
</pre>
Response: <b>201 Created</b>
<pre>
{
	"product": {
		"name": "vodka de jujuba",
		"year": 2010,
		"price": 80.9,
		"description": "e vodka mas parece 51 e as vezes saque",
		"avatar": "vodka",
		"id": "83bdb21f-0fe5-47c6-ac26-4bf303a779a9",
		"isActive": true,
		"createdAt": "2023-09-30T12:39:14.632Z",
		"updatedAt": "2023-09-30T12:39:14.632Z"
	}
}
</pre>
<br/>
<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para listar produtos cadastrados (ex: ?page=1&limit=5 )</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"quantity": 4,
	"products": [
		{
			"id": "bc629bf2-598c-42e5-827b-f3e23c69a07c",
			"name": "vodka",
			"year": 2010,
			"price": "50.99",
			"isActive": true,
			"description": "e vodka mas parace 51 e as vezes saque",
			"createdAt": "2023-09-30T10:25:45.617Z",
			"updatedAt": "2023-09-30T10:25:45.617Z",
			"avatar": "vodka"
		},
		{
			"id": "c38312bc-f84b-4a55-9be1-7dd046120c3d",
			"name": "15% jujuba",
			"year": 2010,
			"price": "80.99",
			"isActive": true,
			"description": "agora vai... o gosto que nao sai da boca, fica que nem chiclete",
			"createdAt": "2023-09-30T11:46:51.388Z",
			"updatedAt": "2023-09-30T12:16:46.675Z",
			"avatar": "vodka"
		},
	]....
}
</pre>

# /product/:id

<h4><b>GET:</b> Rota disponível somente para usuário autenticado, usada para pegar um Produto por id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"products": {
		"id": "bc629bf2-598c-42e5-827b-f3e23c69a07c",
		"name": "vodka",
		"year": 2010,
		"price": "50.99",
		"isActive": true,
		"description": "e vodka mas parace 51 e as vezes saque",
		"createdAt": "2023-09-30T10:25:45.617Z",
		"updatedAt": "2023-09-30T10:25:45.617Z",
		"avatar": "vodka"
	}
}
</pre>

</br>
<h4><b>PATCH:</b> Rota disponível somente para usuário autenticado usada para atualizar informações ou ativar/desativar um produto pelo id.</h4>
Request:
<pre>
{
	"name": "16% jujuba",
	"isActive": false
}
</pre>
Response: <b>200 OK</b>
<pre>
{
	"id": "c38312bc-f84b-4a55-9be1-7dd046120c3d",
	"name": "16% jujuba",
	"year": 2010,
	"price": "50.99",
	"isActive": false,
	"description": "agora vai, o gosto que nao sai da boca, fica que nem chiclete",
	"createdAt": "2023-09-30T11:46:51.388Z",
	"updatedAt": "2023-10-01T18:59:18.638Z",
	"avatar": "vodka"
}
</pre>

</br>
<h4><b>DELETE:</b> Rota disponível somente para usuário autenticado usada para apagar um Produto pelo id.</h4>
Request:
<pre>
{}
</pre>
Response: <b>204 No content</b>
<pre>
{}
</pre>
