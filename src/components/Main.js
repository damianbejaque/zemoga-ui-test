import React from 'react'
import Card from './Card'
import { MainContent, PrincipalImage } from '../styles/components/Main'
import { mainThumb } from '../hoc/queries'
import { Query } from 'react-apollo'
const Main = () => (
  <Query query={mainThumb}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error...</p>
        const information = data.getIsMain
        return (
          <MainContent>
            <PrincipalImage background={`url(${information.background})`}>
              <div className='panel-card'>
                <Card isMain={information.isMain} {...information} />
              </div>
              <div className='panel-footer'>
                <span className='closing'>CLOSING IN</span>
                <span className='days'>22 days</span>
              </div>
            </PrincipalImage>
          </MainContent>
        )
      }
    }

  </Query>
)

export default Main
