import express, { json } from "express";
import cors from "cors";
import isSactionated from "@/is-sanctionated";
import sanctionated from "@/sanctionated";
import nonSanctionated from "@/non-sanctionated";

const app = express()
  .use(json())
  .use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 200,
    }),
  );

app.post("/addresses", (req, res) => {
  const [{ address, chain }] = req.body;
  res.json(
    isSactionated(address)
      ? sanctionated(address, chain)
      : nonSanctionated(address, chain),
  );
});

const server = app.listen(process.env.PORT ?? 3000, () => {
  console.log("Server is running on port 3000");
});

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, () => {
    console.log("\n");
    console.info(`${signal} signal received.`);
    console.log("Closing http server.");
    server.close(() => {
      console.log("Http server closed.");
    });
  });
});
