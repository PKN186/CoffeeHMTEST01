import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  ContainerFluid,
  Wrapper,
  Content,
  Perks,
  Perk,
  Image
} from './styles'
import heroImg from '../../../../assets/images/coffee-delivery-mockup.svg'

export function Hero() {
  return (
    <ContainerFluid>
      <Wrapper>
        <Content>
          <header>
            <h1>Кофе, вдохновляющее каждый день</h1>
            <p>
              COFFEE SHOP H-M — это момент уюта и тепла,<br />
              где бы вы ни были.
            </p>
          </header>
          <Perks>
            <Perk>
              <ShoppingCart size={20} weight="fill" />
              <span>Заказ в два клика</span>
            </Perk>
            <Perk>
              <Package size={20} weight="fill" />
              <span>Сохранение аромата</span>
            </Perk>
            <Perk>
              <Timer size={20} weight="fill" />
              <span>Быстрая доставка</span>
            </Perk>
            <Perk>
              <Coffee size={20} weight="fill" />
              <span>Свежесть в каждой чашке</span>
            </Perk>
          </Perks>
        </Content>
        <Image>
          <img src={heroImg} alt="Иллюстрация кофе" />
        </Image>
      </Wrapper>
    </ContainerFluid>
  )
}
