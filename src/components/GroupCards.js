/*
Componente GroupCard el cual utiliza la funcion Query para utilizar la informacion de la base de datos
y posteriormente mostrar los resultados
*/
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
        const information = data.getThumbs.filter(da => !da.isMain)
        return (
          <GroupCardStyle>

            {information.map((item, index) => {
              return (
                <Card key={index} {...item} />
              )
            })}

          </GroupCardStyle>
        )
      }
    }
  </Query>
)

export default GroupCards
