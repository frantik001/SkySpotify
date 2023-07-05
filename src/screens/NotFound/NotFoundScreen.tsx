import { useNavigate } from 'react-router-dom'
import Button, { ButtonStyle } from '@/screens/components/Button/Button'
import s from './NotFoundScreen.module.scss'
import * as S from './NotFoundScreen.style'
import smileCrying from '@/img/smileCrying.png'
import Menu from '../components/Menu/Menu'
import PlayerBar from '../components/PlayerBar/PlayerBar'

const NotFoundScreen = () => {
  const navigate = useNavigate()

  return (
    <main className={s.notFound}>
      <Menu />

      <S.notFoundMain className={s.notFoundMain}>
        <h1 className={s.notFoundTitle}>404</h1>
        <h2 className={s.notFoundSubTitle}>
          Страница не найдена <img src={smileCrying} alt="Crying smile" />
        </h2>
        <p className={s.notFoundText}>
          Возможно, она была удалена или перенесена на другой адрес
        </p>
        <Button
          style={ButtonStyle.Purple}
          title="Вернуться на главную"
          action={() => navigate('/')}
        />
      </S.notFoundMain>

      <PlayerBar />
    </main>
  )
}

export default NotFoundScreen
