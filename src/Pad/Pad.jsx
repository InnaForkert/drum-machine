import { useEffect, useState } from "react";
import { Pad } from "./Pad.styled";
import useSound from "use-sound";

function DrumPad({ id, src, audio }) {
  const [playSound] = useSound(audio);
  const [animate, setAnimated] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  function playDrum() {
    setAnimated(true);
    setTimeout(() => setAnimated(false), 200);
    playSound();
  }

  function handleKeyDown(e) {
    if (e.key.toUpperCase() === id) {
      playDrum();
    }
  }

  return (
    <Pad
      className={animate ? "animated drum-pad" : "drum-pad"}
      onClick={playDrum}
    >
      <audio className="clip" src={src} />
      {id}
    </Pad>
  );
}

export default DrumPad;
