import { useCallback, useState } from 'react'
import './App.css'
import { GameImage } from './GameImage'
import { ClickBox } from './ClickBox';
import { Dropdown } from './Dropdown';
function App() {
  const [box, setBox] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleUserClick = useCallback((event) => {
    const x = event.pageX;
    const y = event.pageY;
    setBox({ x, y });
    setIsOpen(false);
    console.log("Click coordinates:", { x, y });
  });
  const handleToggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  });
  return (
    <div>
      <GameImage handleUserClick={handleUserClick} />
      {box && <ClickBox x={box.x} y={box.y} />}
      {box && <Dropdown x={box.x} y={box.y} isOpen={isOpen} handleToggleDropdown={ handleToggleDropdown} />}
    </div>
  );
}

export default App
