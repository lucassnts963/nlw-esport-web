import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import "./styles/main.css";

import logoImg from "./assets/logo.svg";
import { GameBanner, GameBannerProps } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

export function App() {
  const [games, setGames] = useState<GameBannerProps[]>([]);
  useEffect(() => {
    axios("http://192.168.254.132:3333/games")
      .then(response => {
        setGames(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="Logo do ESport" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-8  gap-6 mt-16">
        {games.map(game => {
          return <GameBanner data={game} key={game.id} />;
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal games={games} />
      </Dialog.Root>
    </div>
  );
}

export default App;
