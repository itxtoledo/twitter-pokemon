import cron from "node-cron";
import { bitcoin } from "./bitcoin";

function main() {
  // Agendando a tarefa para ser executada a cada 1 hora
  cron.schedule("0 */1 * * *", () => {
    bitcoin();
  });
}

main();
