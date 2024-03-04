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
