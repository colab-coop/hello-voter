import styled from 'styled-components'
import { spacing } from "../../theme";

const grey = {
  3: "#fafbfc",
  5: "#f7f8fa",
  7: "#f3f6f8",
  10: "#eff2f5",
  15: "#e7ecf1",
  20: "#e1e7ed",
  30: "#d5dee6",
  40: "#cad5df",
  50: "#c1ced9",
  60: "#b8c7d4",
  70: "#b0c1d0",
  80: "#a9bbcb",
  90: "#a2b6c7",
  100: "#9cb1c3",
  125: "#8ea6bb",
  150: "#829cb4",
  175: "#7894ad",
  200: "#6e8ca8",
  300: "#56748f",
  400: "#496279",
  500: "#435a6f",
  600: "#37536c",
  700: "#2c4b68",
  800: "#1f4160",
  900: "#153656",
  1000: "#092744"
}

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const FigureContainer = styled.ul`
  margin-top: ${spacing[5]};
`

export const FigureRow = styled.li`
  font-weight: 600;
  padding: ${spacing[5]};
  background-color: ${(props) => grey[props.bgLevel]};
  color: ${grey[1000]};
  border-bottom: 1px solid ${grey[100]};
`;