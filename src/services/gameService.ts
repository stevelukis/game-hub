import APIClient from "./api-client";
import Game from "../entities/Game";

const gameService = new APIClient<Game>("/games");

export default gameService;
