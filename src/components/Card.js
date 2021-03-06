/* Componente Card en el cual se utiliza useState para los distintos cambios de estado para los votos y su correspondiente
actualizacion con los elementos internos adicionalmente se importa el boton VoteButton para la aplicacion de los votos y manejo de estilos directamente por el
componente VoteButton y La importacion de los mutation de ThumbsUp y ThumbsDown para ingreso a la base de datos
*/
import React, { useState, useEffect } from 'react'
import { MainCard, VoteUp, VoteDown } from '../styles/components/Card'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import VoteButton from '../components/VoteButton'
import { ThumbsUp, ThumbsDown } from '../hoc/Votes'

const Card = (data) => {
  const [votesUp, setVotesUp] = useState(data.votesUp)
  const [perUp, setPerUp] = useState(data.votesUp)
  const [votesDown, setVotesDown] = useState(data.votesDown)
  const [perDown, setPerDown] = useState(data.votesDown)
  const [submitVote, setSubmitVote] = useState(false)

  function upsVotes () {
    const ups = Number(votesUp)
    const downs = Number(votesDown)
    const total = Number(ups + downs)
    const result = (ups / total) * 100
    setPerUp(Math.round(result))
  }

  function downsVotes () {
    const ups = Number(votesUp)
    const downs = Number(votesDown)
    const total = Number(ups + downs)
    const result = (downs / total) * 100
    setPerDown(Math.round(result))
  }
  useEffect(() => {
    setVotesUp(data.votesUp)
    setVotesDown(data.votesDown)
    upsVotes()
    downsVotes()
  })

  const id = data.id
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
              <span className='card-info-subtitle'>{data.name}</span>
              <p className='card-info-add'>{data.description}</p>

              {
                submitVote
                  ? <div className='submitVote'>
                    <button className='newVote' onClick={() => setSubmitVote(false)}>Vote again</button>
                    </div>

                  : <div className='submitVote'>
                    <ThumbsUp>
                      {
                        (toggleLike, { loading: queryLoading, error: queryError, client }) => {
                          const handleLikeClick = () => {
                            toggleLike({
                              variables: {
                                input: id
                              }
                            })
                            setSubmitVote(true)
                          }
                          if (queryLoading) return <h1>Loading</h1>
                          if (queryError) return <h1>Error</h1>

                          return (
                            <VoteButton type='up' onClick={handleLikeClick} />
                          )
                        }
                      }
                    </ThumbsUp>

                    <ThumbsDown>
                      {
                        (toggleLike, { loading: queryLoading, error: queryError, client }) => {
                          const handleUnLikeClick = () => {
                            toggleLike({
                              variables: {
                                input: id
                              }
                            })
                            setSubmitVote(true)
                          }
                          if (queryLoading) return <h1>Loading</h1>
                          if (queryError) return <h1>Error</h1>

                          return (
                            <VoteButton type='down' onClick={handleUnLikeClick} />
                          )
                        }
                      }
                    </ThumbsDown>
                  </div>

              }

            </div>
            <div className='votes'>
              <VoteUp width={perUp}>
                <span />
                <span> {perUp} %</span>
              </VoteUp>
              <VoteDown width={perDown}>
                <span />
                <span> {perDown} %</span>
              </VoteDown>
            </div>
            </MainCard>
      }
    </div>
  )
}

export default Card
