import React from 'react'
import Card from './Card'
import { Query } from 'react-apollo'
import { allThumbs } from '../hoc/queries'
import { GroupCardStyle } from '../styles/components/GroupCards'
const GroupCards = () => (
  <Query query={allThumbs}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error...</p>
        console.log(data)
        const information = data.getThumbs.filter(da => !da.isMain)
        return (
          <GroupCardStyle>
            {information.map((item, index) => {
              return (
                <Card key={index} margin='40px' {...item} />
              )
            })}
          </GroupCardStyle>
        )
      }
    }
  </Query>
)

export default GroupCards
