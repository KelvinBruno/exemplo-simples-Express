import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("ADICIONE UM TEXTO");
});
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
app.get("/ferrari", (request, response) => {
  response.send("Ferrari");
});
app.get("/", (request, response) => {
  response.send("Ferrari");
});

app.get("/carros", (request, response) => {
  // seu código aqui
  response.send(["Ford", "Ferrari", "Chevrolet"]);
});
