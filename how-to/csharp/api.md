# API with .NET Core

## Database connection

Configurate the `appsettings.json`

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "Path": "C:\\CDR\\",
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DB_SQL": "Data Source=;Initial Catalog=DataBase;User ID=;Password=;"
  }
}
```

The `Program.cs` has to be configured like the following

```cs
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

```

Then in the `.Negocio` project install the following dependencies

- Microsoft.AspNetCore.Http
- Microsoft.AspNetCore.Http.Abstractions
- Microsoft.Extensions.Configuration
- Microsoft.Extensions.Configuration.Json
- System.Data.SqlClient

Then in the `.Server` project install the following dependencies

- Microsoft.AspNetCore.SpaProxy
- Newtonsoft.Json
- Swashbuckle.AspNetCore

Now in the `.Negocio/DataAccess/ClassDAL.cs` the method to connect with the database

```cs
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using uptalent_react_node.Negocio.Models;

public bool GetChatsAndName(ref string sError, int ID_EMPLEADO, ref List<Chats> lstChats, ref List<DataUser> lstData)
{
    try
    {
        var buldier = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json", false);
        IConfiguration configuration = buldier.Build();
        string connString = configuration.GetConnectionString("DB_SQL");

        using (SqlConnection connection = new SqlConnection(connString))
        {
            using (SqlCommand command = new SqlCommand("eval.SEL_CHATS", connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@ID_EMPLEADO", ID_EMPLEADO);
                connection.Open();
                using (IDataReader oResultado = command.ExecuteReader())
                {
                    if (oResultado.Read())
                    {
                        if (Convert.ToInt32(oResultado["ExisteError"].ToString()) == 0)
                        {
                            DataUser oLstData = new DataUser();

                            oLstData.ID_EMPLEADO = Convert.ToInt32(oResultado["ID_EMPLEADO"]);
                            oLstData.ID_TIPO_USUARIO = Convert.ToString(oResultado["ID_TIPO_USUARIO"]);
                            oLstData.NOMBRE = Convert.ToString(oResultado["NOMBRE"]);

                            lstData.Add(oLstData);
                        }
                        else if (Convert.ToInt32(oResultado["ExisteError"].ToString()) == 1)
                        {
                            sError = "Ocurrió un problema al procesar la solicitud, contacte al administrador del sistema con el siguiente folio: " + cGeneraLog.LogError(oResultado["MensajeError"].ToString(), "SQL");
                            return false;
                        }
                        else if (Convert.ToInt32(oResultado["ExisteError"].ToString()) == 2)
                        {
                            sError = oResultado["MensajeError"].ToString();
                            return false;
                        }
                        else
                        {
                            throw new ArgumentException("La base de datos no regreso ningun valor en ExisteError verificar la consulta", "DBO");
                        }
                    }

                    oResultado.NextResult();

                    while (oResultado.Read())
                    {
                        if (Convert.ToInt32(oResultado["ExisteError"].ToString()) == 0)
                        {
                            Chats oLstChats = new Chats();

                            oLstChats.ID_EMPLEADO = Convert.ToInt32(oResultado["ID_EMPLEADO"]);
                            oLstChats.D_TIPO_USUARIO = Convert.ToString(oResultado["D_TIPO_USUARIO"]);
                            oLstChats.NOMBRE = Convert.ToString(oResultado["NOMBRE"]);

                            lstChats.Add(oLstChats);
                        }
                        else if (Convert.ToInt32(oResultado["ExisteError"].ToString()) == 1)
                        {
                            sError = "Ocurrió un problema al procesar la solicitud, contacte al administrador del sistema con el siguiente folio: " + cGeneraLog.LogError(oResultado["MensajeError"].ToString(), "SQL");
                            return false;
                        }
                        else if (Convert.ToInt32(oResultado["ExisteError"].ToString()) == 2)
                        {
                            sError = oResultado["MensajeError"].ToString();
                            return false;
                        }
                        else
                        {
                            throw new ArgumentException("La base de datos no regreso ningun valor en ExisteError verificar la consulta", "DBO");
                        }
                    }
                }
            }
        }
        return true;
    }
    catch (Exception ex)
    {
        sError = "Ocurrió un problema al procesar la solicitud, contacte al administrador del sistema con el siguiente folio: " + cGeneraLog.LogError(ex.ToString(), "DAL");
        return false;
    }
}
```

To use Logs we have to create a file `cGeneraLog.cs` and set the following code

```cs
using System.Reflection;

namespace uptalent_react_node.Negocio
{
    public static class cGeneraLog
    {
        public static string LogError(string message, string capa)
        {
            string logFolder = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Logs");
            string timestamp = DateTime.UtcNow.ToString("yyyyMMddHHmmss");
            string file = $"{capa}_{timestamp}_" + Guid.NewGuid().ToString()[..4] + ".txt";
            string routeFile = Path.Combine(logFolder, file);

            if (!Directory.Exists(logFolder)) {
                Directory.CreateDirectory(logFolder);
            }

            using StreamWriter writer = new(routeFile);
            writer.WriteLine($"Error: {message}");

            return file;
        }
    }
}
```

## Controllers

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

Now set the `vite.config.js` to access those endpoints

```js
server: {
    proxy: {
        '^/api/YourController': {
            target,
            secure: false
        },
    },
}
```

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
