# Pass ajax with JSON data

```js
const sendToCSharp = function () {
  const jsonData = JSON.stringify({ nameParametherInCSharp: arr });

  sendHTMLArr(jsonData);
};

function sendHTMLArr(jsonData) {
  $.ajax({
    type: "POST",
    url: "Some.aspx/Some",
    data: `{ 'nameParametherInCSharp': '${jsonData}' }`,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      alert(data.d);
    },
    error: (error) => {},
  });
}
```

### 🧤 How to catch the data in the aspx.cs

```csharp
[WebMethod]
public static string Some(string nameParametherInCSharp) {
    cGeneraLog oGernaraLogWeb = new cGeneraLog();

    try {
        cEstatusMaquinaDAL oDAL = new cEstatusMaquinaDAL();
        dynamic data = JsonConvert.DeserializeObject(jsonData);
        string sError = "";
        string m1 = data.ARRHTML[0];
        string m2 = data.ARRHTML[1];

        if (oDAL.UpdateHTMLCardMachines(ref sError, m1, m2)) {
            sError = "HTML insertado correctamente";
        }

        return sError;
    } catch (Exception ex) {
        return "Error más " + oGernaraLogWeb.ReportarErrorWeb(ex, "WEB");
    }
}
```
