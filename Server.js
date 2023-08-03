const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post("/submitContact", (req, res) => {
  const contact = req.body;
  if (contact) {
    router.db.get("contacts").push(contact).write();
    res.status(200).json({ message: "Contact form submitted successfully!" });
  } else {
    res.status(400).json({ error: "Invalid data" });
  }
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
