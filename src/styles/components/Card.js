import styled from 'styled-components'

export const MainCard = styled.div`
  background: ${props => props.background || 'rgba(110, 115, 132, 0.3)'};
  justify-content: ${props => props.align || 'space-between'};
  margin-bottom: ${props => props.margin || '0px'};
  background-size: cover;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 40px;
    width: 500px;
  height: 450px;
  &{
.card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 35px;
    justify-content: space-between;
}

.card-title {
    font-size: 60px;
    font-weight: 400;
}


.card-information {
    font-size: 21px;
}

.card-link {
    color: white;
    line-height: 24px;
}

.card-options {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.card-options > div {
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 30px;
    width: 250px;
    height: 80px;
}


.votes {
    display: flex;
    align-items: center;
}

.vote {
  background: #1cbab2;
}

.no-vote {
  background: #ffad1d;
}
/* Card Vote */

.card-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
}

.card-info-subtitle {
    color: #ffffff;
    font-size: 45px;
    line-height: 48px;
    font-weight: 400;
}
.votes {
    align-items: center;
    display: flex;
}
.newVote{
  background: transparent;
    border: 0;
    box-shadow: 0px 0px 1px 1px lightgrey;
    cursor: pointer;
    color: white;
    margin: 0px 10px;
    padding: 5px 15px;
}
.submitVote{
  display: flex;
  &{
    width: 100px;
  }
}
}
`

export const VoteUp = styled.div`
background: #1cbab4;
font-size: 29px;
line-height: 35px;
padding: 5px;
background: #1cbab2;
  color: white;
    line-height: 24px;
width: ${props => props.width}%;
`
export const VoteDown = styled.div`
  background: #ffad1b;
  font-size: 29px;
  line-height: 35px;
  padding: 5px;
  background: #ffad1d;
  color: white;
  line-height: 24px;

  width: ${props => props.width}%;
`
