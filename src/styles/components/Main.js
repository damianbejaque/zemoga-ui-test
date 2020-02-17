import styled from 'styled-components'

export const MainContent = styled.div`
&{
  .panel-card {
  padding: 80px 130px;
}


.panel-footer {
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 50px;
  width: 100%;
}

.closing {
  align-items: center;
  display: flex;
  background: rgba(73, 74, 80, 0.3);
  color: white;
  font-size: 13px;
  font-weight: 400;
  height: calc(100% - 10px);
  justify-content: flex-end;
  line-height: 21px;
  text-align: end;
  padding: 5px;
  width: 20%;
}
.closing::after {
  border-bottom: 10px solid transparent;
  border-right: 10px solid rgba(23, 23, 23, 0.3);
  content: '';
  margin-left: 10px;
  position: absolute;
  transform: rotate(45deg);
}

.days {
  align-items: center;
  background: rgba(249, 249, 251, 0.3);
  color: #464646;
  display: flex;
  font-size: 37px;
  font-weight: 400;
  height: calc(100% - 10px);
  line-height: 50px;
  padding: 5px 15px;
  width: 80%
}

@media (max-width: 600px) {
  .panel-card {
    padding: 20px 20px;
  }
  .panel-card > div {
    display: flex;
    justify-content: center;
  }
  .panel-image {
    height: 672px;
  }

  .closing { 
    width: 70%;
  }
}
}
`
export const PrincipalImage = styled.div`
  background: ${props => props.background};
    background-size: cover;
    height: 740px;
`
