import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { state } from ".";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [responsiveIcon, setresponsiveIcon] = useState(false);

  const handleMenuClick = () => {
    setresponsiveIcon(!responsiveIcon);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };
  const snap = useSnapshot(state);

  return (
    <div className="bg-ipink border-dark border-b-2 overflow-x-hidden text-ipink flex flex-row items-center py-3 justify-start">
      <div className="flex flex-row w-1/3 justify-evenly max-md:hidden">
        <a
          className="cursor-pointer"
          onClick={() => {
            const originalXOffset = window.scrollX;
            for (const key in state) {
              if (key == "home") {
                state[key] = true;
              } else {
                state[key] = false;
              }
            }
            window.scrollTo(originalXOffset, 0);
          }}
        >
          <Icon
            icon="material-symbols:home"
            color="#323232"
            style={{ scale: "2" }}
          />
        </a>
        <a
          className="cursor-pointer"
          onClick={() => {
            const originalXOffset = window.scrollX;
            for (const key in state) {
              if (key == "playlist") {
                state[key] = true;
              } else {
                state[key] = false;
              }
            }
            window.scrollTo(originalXOffset, 0);
          }}
        >
          <Icon
            icon="majesticons:music"
            color="#323232"
            style={{ scale: "2" }}
          />
        </a>
        <a
          className="cursor-pointer"
          onClick={() => {
            const originalXOffset = window.scrollX;
            for (const key in state) {
              if (key == "artist") {
                state[key] = true;
              } else {
                state[key] = false;
              }
            }
            window.scrollTo(originalXOffset, 0);
          }}
        >
          <Icon icon="mdi:artist" color="#323232" style={{ scale: "2" }} />
        </a>
        <a
          className="cursor-pointer"
          onClick={() => {
            const originalXOffset = window.scrollX;
            for (const key in state) {
              if (key == "user") {
                state[key] = true;
              } else {
                state[key] = false;
              }
            }
            window.scrollTo(originalXOffset, 0);
          }}
        >
          <Icon
            icon="zondicons:add-solid"
            color="#323232"
            style={{ scale: "2" }}
          />
        </a>
      </div>

      <motion.div className="md:hidden w-1/5 mx-5" onClick={handleMenuClick}
      >
        <Icon icon="ion:menu" color="#323232" style={{ scale: "2" }}/>
        {(responsiveIcon &&
      <motion.div className="flex flex-col absolute z-50 bg-ipink drop-shadow-xl rounded-2xl px-5 left-0 justify-evenly"
      key="modal"
      initial={{ height: "0%" }}
      animate={{ height: "30%" }}
      exit={{ height: "0%" }}
      transition={{ duration: 0.3 ,ease:"linear"}} 
      >
      <a
        className="cursor-pointer"
        onClick={() => {
          const originalXOffset = window.scrollX;
          for (const key in state) {
            if (key == "home") {
              state[key] = true;
            } else {
              state[key] = false;
            }
          }
          window.scrollTo(originalXOffset, 0);
        }}
      >
        <Icon
          icon="material-symbols:home"
          color="#323232"
          style={{ scale: "2" }}
        />
      </a>
      <a
        className="cursor-pointer"
        onClick={() => {
          const originalXOffset = window.scrollX;
          for (const key in state) {
            if (key == "playlist") {
              state[key] = true;
            } else {
              state[key] = false;
            }
          }
          window.scrollTo(originalXOffset, 0);
        }}
      >
        <Icon
          icon="majesticons:music"
          color="#323232"
          style={{ scale: "2" }}
        />
      </a>
      <a
        className="cursor-pointer"
        onClick={() => {
          const originalXOffset = window.scrollX;
          for (const key in state) {
            if (key == "artist") {
              state[key] = true;
            } else {
              state[key] = false;
            }
          }
          window.scrollTo(originalXOffset, 0);
        }}
      >
        <Icon icon="mdi:artist" color="#323232" style={{ scale: "2" }} />
      </a>
      <a
        className="cursor-pointer"
        onClick={() => {
          const originalXOffset = window.scrollX;
          for (const key in state) {
            if (key == "user") {
              state[key] = true;
            } else {
              state[key] = false;
            }
          }
          window.scrollTo(originalXOffset, 0);
        }}
      >
        <Icon
          icon="zondicons:add-solid"
          color="#323232"
          style={{ scale: "2" }}
        />
      </a>
      </motion.div>
        )}
      </motion.div>

      <div className="w-1/5" />
      <div
        className="bg-dark rounded-2xl flex flex-row items-center justify-evenly p-1 pl-4 pr-4"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Find Artists/Songs here"
          id="searchbar"
          className="bg-transparent text-s p-1 placeholder-ipink border-none outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div style={{ cursor: "pointer" }}
          onClick={() => {
            const originalXOffset = window.scrollX;
            for (const key in state) {
              if (key == "searchon") {
                state[key] = true;
              } else {
                state[key] = false;
              }
            }
            window.scrollTo(originalXOffset, 0);
          }}
        
        >
          <Icon
            icon="ic:outline-search"
            color="#FF3179"
            style={{ scale: "2", marginRight: "2%" }}
          />
        </div>
      </div>
      <div className="w-1/5" />
      <div
        className="cursor-pointer max-md:mx-5"
        onClick={() => {
          const originalXOffset = window.scrollX;
          for (const key in state) {
            if (key == "user") {
              state[key] = true;
            } else {
              state[key] = false;
            }
          }
          window.scrollTo(originalXOffset, 0);
        }}
      >
        <Icon
          icon="iconamoon:profile-circle-fill"
          color="#323232"
          style={{ scale: "3" }}
        />
      </div>
    </div>
  );
}

export default Navbar;
