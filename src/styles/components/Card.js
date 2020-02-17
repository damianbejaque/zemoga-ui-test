import styled from 'styled-components'

export const MainCard = styled.div`
  background: ${props => props.background || 'rgba(110, 115, 132, 0.3)'};
  justify-content: ${props => props.align || 'space-between'};
  margin-bottom: ${props => props.margin || '0px'};
  background-size: cover;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 450px;
  margin: 0 40px;
    width: 500px;
  &{
.card {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 35px;
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
    align-items: center;
    justify-content: space-around;
}

.card-options > div {
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 30px;
    height: 80px;
    width: 250px;
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
}
`
