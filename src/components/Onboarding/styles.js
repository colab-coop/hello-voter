import styled from 'styled-components'
import { spacing, colors } from "../../theme";

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
  list-style: circle;
  list-style-position: inside;
`

export const FigureRow = styled.li`
  padding: ${spacing[5]};
  border-bottom: 1px solid ${colors.coolGray[20]};
`;