import React from "react";
import Footballer from "../images/Footballer.png";

const PlayerCard = ({
  player,
  spot,
  parent,
  relegatePlayerFromTeam,
  addPlayerToTeam,
  position2Fill,
  setPosition2Fill,
  setHighlightCard,
  highlightCard,
  setShowPlayerModal,
  setDisplayedPlayer,
}) => {
  let scoreString = "" + player?.score;
  scoreString = scoreString.slice(0, 5);

  return (
    <div>
      {player.short_name ? (
        <div
          onClick={() => {
            if (parent !== "PlayerGrid") {
              relegatePlayerFromTeam(spot);
              setHighlightCard(spot);
            }
          }}
          className={
            parent === "PlayerGrid"
              ? "relative justify-center rounded-xl border border-gray-800 text-center shadow-xl p-6 text-white border-solid transition duration-500 transform hover:scale-110"
              : "relative justify-center cursor-pointer bg-opacity-75 border border-gray-800 text-center rounded-2xl text-white shadow-xl p-6 border-solid bg-black transition duration-500 transform hover:scale-110"
          }
        >
          <div className="">{player?.long_name}</div>
          <div className="flex justify-evenly mt-2">
            <img
              src={player?.nation_flag_url}
              className="w-8 "
              alt="flag"
            ></img>
            <div>{player?.nationality_name}</div>
            <div>{player?.nation_jersey_number}</div>
          </div>
          <img
            src={player?.player_face_url}
            alt="player-face"
            className="rounded-full mt-1  mx-auto w-16"
          ></img>

          <div className="flex justify-evenly items-center mt-1">
            <img src={player?.club_logo_url} alt="flag" className="w-12"></img>
            <div>{player?.club_name}</div>
            <div>{player?.club_jersey_number}</div>
          </div>
          <div className=" border border-green-400 rounded-lg p-1 mb-2 w-auto mx-auto">
            {"Overall: "}
            {player?.overall}
          </div>
          <div className="">Positions: {player?.player_positions}</div>

          {parent === "PlayerGrid" && (
            <>
              <div className="absolute -top-4 -right-2 bg-red-600 rounded-full font-bold px-2 py-1  w-auto mx-auto">
                {scoreString}
              </div>

              <div className="mt-6 w-4/5 mx-auto border-t border-green-400">
                {" "}
                <button
                  className="absolute bottom-0 left-0"
                  onClick={() => {
                    setShowPlayerModal(true);
                    console.log("ID", player._id);
                    setDisplayedPlayer(player);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 z-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="absolute bottom-0 right-0 flex items-end"
                  onClick={() => {
                    addPlayerToTeam(player, position2Fill);
                  }}
                >
                  <div className="text-white">Add to Team</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="#00ED64"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div
          onClick={() => {
            setPosition2Fill(spot);
            if (highlightCard === spot) setHighlightCard(null);
            else setHighlightCard(spot);
          }}
          className={
            highlightCard === spot
              ? "relative justify-center cursor-pointer text-center h-64 shadow-xl p-6 border-solid bg-gradient-to-r text-white from-black to-blue-900  transition duration-500 transform hover:scale-110"
              : "relative justify-center cursor-pointer bg-opacity-75 text-center text-white bg-black shadow-xl p-6 transition duration-500 transform hover:scale-110"
          }
        >
          <div className="">UNKNOWN</div>

          <img
            src={Footballer}
            alt="player-face"
            className="rounded-full mt-2  mx-auto w-24"
          ></img>

          <div className="bottom-bar mt-4">
            <div className="absolute bottom-0 text-center my-2 pl-4">
              <span className="mr-1">Click to fill position </span>
              <span role="img" aria-label="glass">
                🔍
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
