import React, { useEffect, useState } from 'react'

import Logo from '../../assets/icons/logo.svg'
import LogoutIcon from '../../assets/icons/logout.svg'
import {
  Container,
  Header,
  LogoutButton,
  Title,
  Subtitle,
  FiltersArea,
  Filters,
  FiltersText,
  FlatList,
} from './styles'

import { api } from '../../services/api'
import { GameProps } from '../../@types/GameProps'
import { BetsProps } from '../../@types/BetsProps'
import BetsCard from '../../components/BetsCard'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions } from '../../store/userSlice'

const Home = () => {
  const [gameData, setGameData] = useState<GameProps[]>([])
  const [betsData, setBetsData] = useState<BetsProps[]>([])
  const [filteredBets, setFilteredBets] = useState(betsData)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const done = useSelector((state: any) => state.done)

  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await api.get('/all-games')
        setGameData(data)
      } catch (err) {}
    }

    getGames()
    getBets()
  }, [done])

  const getBets = async () => {
    const { data } = await api.get(`/all-bets`)
    setBetsData(data)
    setFilteredBets(data)
  }

  const handleFilterBets = (gameType: string) => {
    const result = betsData.filter(item => item.game_type === gameType)
    setFilteredBets(result)
  }

  const handleLogout = () => {
    dispatch(UserActions.logOut())
  }

  return (
    <Container>
      <Header>
        <Logo width={100} height={100} />

        <LogoutButton onPress={handleLogout}>
          <LogoutIcon width={30} height={30} />
        </LogoutButton>
      </Header>

      <Title>Recent Games</Title>

      <Subtitle>Filters</Subtitle>

      <FiltersArea>
        {gameData.map(game => (
          <Filters
            color={game.color}
            key={game.id}
            onPress={() => handleFilterBets(game.game_type)}
          >
            <FiltersText color={game.color}>{game.game_type}</FiltersText>
          </Filters>
        ))}
      </FiltersArea>

      <FlatList
        data={filteredBets}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <BetsCard data={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ marginBottom: 25 }}
      />
    </Container>
  )
}

export default Home
