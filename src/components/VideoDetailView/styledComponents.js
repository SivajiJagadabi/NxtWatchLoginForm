import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 210px;
  margin-top: 78px;
  overflow-x: hidden;
  @media screen and (max-width: 768px) {
    margin-left: 0px;

    width: 100%;
  }
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
