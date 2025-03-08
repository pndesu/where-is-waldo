import React, { useCallback, useState, useEffect, use} from 'react'
import './App.css'
import { GameImage } from './GameImage'
import { ClickBox } from './ClickBox';
import { Dropdown } from './Dropdown';
import axios from 'axios';
import { Timer } from './Timer';
import { Header } from './Header';
import { CharacterToFindTab } from './CharacterToFindTab';
function App() {
  const API_URL = "https://where-is-waldo-da2t.onrender.com";
  const [clickedCoord, setClickedCoord] = useState(null);
  const [nativeCoord, setNativeCoord] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [characterList, setCharacterList] = useState(["Da Vinci", "Kahlo", "Picasso", "Van Gogh", "Warhol"]);
  const imageRef = React.useRef(null);
  useEffect(() => {
    console.log("Updated character list:", characterList);
  }, [characterList]);
  const handleUserClick = useCallback((event) => {
    const image = imageRef.current;
    const scaleX = image.naturalWidth / image.clientWidth;
    const scaleY = image.naturalHeight / image.clientHeight;
    const nativeX = event.nativeEvent.offsetX * scaleX;
    const nativeY = event.nativeEvent.offsetY * scaleY;
    const x = event.pageX;
    const y = event.pageY;
    setClickedCoord({ x: x, y: y });
    setNativeCoord({x: nativeX, y: nativeY})
    setIsOpen(false);
    console.log("Click coordinates:", { nativeX, nativeY });
  });
  
  const handleToggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  });
  const handleTagClick = (option) => {
    axios
      .post(`${API_URL}/api/validate_click`, {
        x: nativeCoord.x,
        y: nativeCoord.y,
      })
      .then((response) => {
        if (response.data.result) {
          if (option === response.data.name) {
            console.log("You found: " + response.data.name);
            setCharacterList((prevList) =>
              prevList.filter((name) => name !== option)
            );
          } else {
            alert("Try again!");
          }
        }
      })
      .catch((error) => {
        console.error("Error validating click:", error);
      });
    setIsOpen((prev) => !prev);
    setClickedCoord(null);
  };
  return (
    <div className='app'>
      <Header/>
      <GameImage handleUserClick={handleUserClick} imageRef={ imageRef} />
      {clickedCoord && <ClickBox x={clickedCoord.x} y={clickedCoord.y} />}
      {clickedCoord && <Dropdown x={clickedCoord.x} y={clickedCoord.y} isOpen={isOpen} handleToggleDropdown={handleToggleDropdown} handleTagClick={handleTagClick} characterList={ characterList} />}
      <Timer characterList={characterList} />
      <CharacterToFindTab characterList={ characterList} />
    </div>
  );
}

export default App
