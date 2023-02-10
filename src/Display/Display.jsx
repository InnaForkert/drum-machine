import DrumPad from "../Pad/Pad";
import Screen from "../Screen/Screen";
import { OuterContainer, Pads } from "./Display.styled";

function Display() {
  const drums = [
    { id: "Q", src: "/audio/Cev_H2.mp3" },
    { id: "W", src: "/audio/Dsc_Oh.mp3" },
    { id: "E", src: "/audio/Heater-1.mp3" },
    { id: "A", src: "/audio/Heater-2.mp3" },
    { id: "S", src: "/audio/Heater-3.mp3" },
    { id: "D", src: "/audio/Heater-4_1.mp3" },
    { id: "Z", src: "/audio/Heater-6.mp3" },
    { id: "X", src: "/audio/Kick_n_Hat.mp3" },
    { id: "C", src: "/audio/RP4_KICK_1.mp3" },
  ];

  return (
    <OuterContainer id="display">
      <Pads>
        {drums.map((el) => (
          <DrumPad id={el.id} key={el.src} className="drum-pad" />
        ))}
      </Pads>
      <Screen />
    </OuterContainer>
  );
}

export default Display;
