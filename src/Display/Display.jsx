import DrumPad from "../Pad/Pad";
import Screen from "../Screen/Screen";
import { OuterContainer, Pads } from "./Display.styled";
import audio1 from "../audio/Cev_H2.mp3";
import audio2 from "../audio/Dsc_Oh.mp3";
import audio3 from "../audio/Heater-1.mp3";
import audio4 from "../audio/Heater-2.mp3";
import audio5 from "../audio/Heater-3.mp3";
import audio6 from "../audio/Heater-4_1.mp3";
import audio7 from "../audio/Heater-6.mp3";
import audio8 from "../audio/Kick_n_Hat.mp3";
import audio9 from "../audio/RP4_KICK_1.mp3";

function Display() {
  const drums = [
    { id: "Q", src: "/audio/Cev_H2.mp3", audio: audio1 },
    { id: "W", src: "/audio/Dsc_Oh.mp3", audio: audio2 },
    { id: "E", src: "/audio/Heater-1.mp3", audio: audio3 },
    { id: "A", src: "/audio/Heater-2.mp3", audio: audio4 },
    { id: "S", src: "/audio/Heater-3.mp3", audio: audio5 },
    { id: "D", src: "/audio/Heater-4_1.mp3", audio: audio6 },
    { id: "Z", src: "/audio/Heater-6.mp3", audio: audio7 },
    { id: "X", src: "/audio/Kick_n_Hat.mp3", audio: audio8 },
    { id: "C", src: "/audio/RP4_KICK_1.mp3", audio: audio9 },
  ];

  return (
    <OuterContainer id="display">
      <Pads>
        {drums.map((el) => (
          <DrumPad
            id={el.id}
            key={el.src}
            className="drum-pad"
            audio={el.audio}
          />
        ))}
      </Pads>
      <Screen />
    </OuterContainer>
  );
}

export default Display;
