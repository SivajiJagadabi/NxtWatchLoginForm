import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 15px;
  overflow-x: hidden;
  width: 83%;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 130vh;
  }
`

export const ViewLikeCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const LikesButtons = styled.div`
  display: flex;
  flex-direction: row;
`

export const Description = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 12px;
`
export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;

  margin-top: 5px;
`

export const TitleCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`
