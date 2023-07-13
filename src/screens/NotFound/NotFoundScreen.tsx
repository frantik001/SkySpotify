import { useNavigate } from 'react-router-dom'
import Button, { ButtonStyle } from '@/screens/components/Button/Button'
import s from './NotFoundScreen.module.scss'
import * as S from './NotFoundScreen.style'
import smileCrying from '@/img/smileCrying.png'
import Menu from '../components/Menu/Menu'
import PlayerBar from '../components/PlayerBar/PlayerBar'

import useUserStore from '@/store/hooks/useUserStore'

const NotFoundScreen = () => {
  const navigate = useNavigate()
  const isLogin = useUserStore('login')
  let menu
  let bar

  if (isLogin) {
    menu = <Menu />
    bar = <PlayerBar />
  }
  return (
    <main className={s.notFound}>
      {menu}

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
          title={isLogin ? 'Вернуться на главную' : 'Войти'}
          action={() => navigate('/')}
        />
      </S.notFoundMain>

      {bar}
    </main>
  )
}

export default NotFoundScreen
