import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { MdSearch as MdSearchM } from 'react-icons/md'

export const Head = styled.header`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 130px;
    position: absolute;
    z-index:10;
    width: 100%
`
export const Title = styled.h1`
    color: #ffffff;
    font-size: 32px;
    font-weight: 400;
    line-height: 38px;
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`

export const Link = styled(LinkRouter)`
    color: #ffffff;
    cursor: pointer;
    line-height: 19px;
    font-size: 16px;
    font-weight: 300;
    text-decoration: none;
    align-self: center;
`

export const MdSearch = styled(MdSearchM)`
color: #fff;
font-size: 30px;
`
