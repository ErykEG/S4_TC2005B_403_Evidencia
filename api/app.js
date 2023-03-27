const { request } = require("express");
const express = require("express");
const sql = require("mssql");

const port = process.env.PORT || 3000;
const app = express();

app.get("/", async (request, result) => {
  result.send("Bienvenido");
});

app.get("/candidates", async (request, result) => {
  await sql.connect(
    "Server=tcp:miservidorsqlequipo2.database.windows.net,1433;Initial Catalog=TC2005B_403_Equipo2;Persist Security Info=False;User ID=usuarioazure;Password=TC2005B403e2;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
  );
  const resultQuerie =
    await sql.query`select Id_Candidates as Id, Name_Candidates as Nombre from Candidates`;
  result.json(resultQuerie.recordset);
});
app.listen(port, function () {
  console.log(`Servidor en el puerto ${port}`);
});
