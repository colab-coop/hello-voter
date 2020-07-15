import styled from 'styled-components'
import { spacing } from "../../theme";

const green = {
  3: "#fafdfc",
  5: "#f7fcfa",
  7: "#f5fbf8",
  10: "#f0f9f5",
  15: "#eaf7f1",
  20: "#e4f5ed",
  30: "#d9f1e5",
  40: "#d0eddf",
  50: "#c8ead9",
  60: "#c0e7d4",
  70: "#b9e4cf",
  80: "#b3e2cb",
  90: "#addfc7",
  100: "#a7ddc3",
  125: "#9bd8ba",
  150: "#90d4b3",
  175: "#87d1ad",
  200: "#7ecda7",
  300: "#64c395",
  400: "#4fbb87",
  500: "#47b881",
  600: "#3faf77",
  700: "#37a56d",
  800: "#2d9760",
  900: "#248953",
  1000: "#197140"
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
  background-color: ${(props) => green[props.bgLevel]};
  color: ${green[1000]};
  border-bottom: 1px solid ${green[100]};
`;