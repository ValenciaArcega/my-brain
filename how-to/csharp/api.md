# API with .NET Core

`Controllers` / `UsuariosController.cs`

```cs
[Route("api/[controller]")]
[ApiController]
public class UsuariosController : ControllerBase
{
	[HttpPost]
	[Route("CheckUser")]
	public IActionResult CheckUser([FromBody] string codeUser)
	{

	}
}
```

## IActionResult

Is an interface representing an action result of an MVC controller action. It provides a flexible way to return various types of responses from your **API endpoints**. With this tool we can return different kind of objects, variables but the status changes, those posible status are:

- `Ok()`: Represents a response with an HTTP status code 200

```cs
return Ok(new { sError = sError, flag = true });

return Ok(false);

return Ok(lst);

return Ok("Message");
```

- `Accepted()`: Represents a response with an HTTP status code **202**

- `NoContent()`: Represents a response with an HTTP status code **204**

- `BadRequest()`: Represents a response with an HTTP status code **400**

- `Unauthorized()`: Represents a response with an HTTP status code **401**

- `Forbid()`: Represents a response with an HTTP status code **403**

- `NotFound()`: Represents a response with an HTTP status code **404**

### Controller method example

```cs
try {
	UsuarioDAL oDal = new UsuarioDAL();
	string sError = string.Empty;

	if (oDal.SeleccionaUsuario(ref sError, idUser)) {
		return Ok(new { sError = sError, flag = true });
	} else {
		return NotFound(new { sError = sError, flag = false });
	}
} catch {
	return Ok(new { sError = "Las credenciales son incorrectas", flag = false });
}
```

## Send data

To can recibe data from JavaScript to C# we should create a method to send that data

Reusable method to send by POST, just recived the entry endpoint and the value

```js
async function postJSON(apiEndpoint, value) {
  try {
    const request = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    return await request.json();
  } catch (e) {
    console.log(e);
  }
}
```

### Sending objects

> ⚠️ If the value to pass is an object `{}` it must be the same as the model class in the C# method

`Object` to send in JavaScript

```js
const objJS = {
  master: masterEntry,
  idKiosco: kioscoEntryDestination,
  idUser: props.userId,
};
```

`Model class` to recive in C#

```cs
public class EntryTagData
{
    public string master { get; set; }
    public int idKiosco { get; set; }
    public int idUser { get; set; }
}
```

Call the API and send the obj

```js
const json = await postJSON("api/kioscos/InsertEntryTag", objJS);
```

Receive the object and set the data into variables

```cs
[HttpPost]
[Route("Some")]
public IActionResult Some([FromBody] ModelClass model)
{
    try {
        int idKiosco = model.idKiosco;
        int idUser = model.idUser;
        string master = model.master;
```

### Sending variables

When is just a primitive data is just passed in the method

```js
const json = await postJSON("api/usuarios/CheckUserSys", var);
```

And to recieve the data _is not neccessary_ to create a model

```cs
[HttpPost]
[Route("CheckUser")]
public IActionResult CheckUser([FromBody] string codeUser)
```
