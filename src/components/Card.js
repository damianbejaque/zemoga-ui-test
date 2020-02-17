import React from 'react'
import { MainCard } from '../styles/components/Card'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
const Card = (data) => {
  return (
    <div>
      {
        data.isMain
          ? <MainCard>
            <div className='card'>
              <small>What's your opinion on</small>
              <span className='card-title'>{data.name}</span>
              <p className='card-information'>{data.description}</p>

              <a className='card-link' href='#' target='_blank' rel='noopener noreferrer'>More information</a>

              <strong><span className='fa fa-wordpress'>&nbsp;</span>What's your Veredict?</strong>
            </div>
            <div className='card-options'>
              <div className='vote'>
                <MdThumbUp color='white' />
              </div>
              <div className='no-vote'>
                <MdThumbDown color='white' />
              </div>
            </div>
          </MainCard>
          : <MainCard margin={data.margin} background={`url(${data.background})`} align='flex-end'>
            <div className='card-info'>
              <span className='card-info-subtitle'>{data.title}</span>
              <p className='card-info-add'>{data.information}</p>

            </div>
            </MainCard>
      }
    </div>
  )
}

export default Card
