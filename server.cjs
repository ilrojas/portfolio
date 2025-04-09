// Code:
const http = require("node:http");
const fs = require("node:fs");
const FILE_PATH = "visits.json";
// Función para obtener el número de visitas desde el archivo
const getVisits = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data).visits || 0;
  } catch (error) {
    return 0; // Si no existe el archivo, comenzamos en 0
  }
};

// Función para guardar el número de visitas en el archivo
const saveVisits = (count) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify({ visits: count }), "utf8");
};
const PORT =process.env.port || 3000;
const processRequest = (req, res) => {
  if(req.url === "/" && req.method === "GET") {
    let visits = getVisits();
    visits++;
    saveVisits(visits);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ visitsCount: visits }));
  }
  if (req.url === "/bienvenido" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Bienvenido a la API", ip: `You ip address: ${req.connection.remoteAddress}` }));
  }
}
const server = http.createServer(processRequest);
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
