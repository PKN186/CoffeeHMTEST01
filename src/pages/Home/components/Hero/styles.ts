import styled from 'styled-components'
import backgroundImg from '../../../../assets/images/hero-background.svg'

export const ContainerFluid = styled.section`
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.background || '#FAFAFA'};
  /* Убираем градиент и делаем фон светлым, почти белым */
  color: ${(props) => props.theme['gray-900']};
  padding: 0;
  overflow: hidden;
`

export const Wrapper = styled.div`
  max-width: calc(70rem + 4.5rem);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 6rem 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 4rem 1rem;
  }
`

export const Content = styled.div`
  flex: 1 1 50%;
  color: ${(props) => props.theme['gray-900']};

  header {
    h1 {
      font-family: ${(props) => props.theme['font-primary']};
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: ${(props) => props.theme['gray-900']};
    }
    p {
      font-family: ${(props) => props.theme['font-secondary']};
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`

export const Perks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
`

export const Perk = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1 1 45%;

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
  span {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const Image = styled.div`
  flex: 1 1 50%;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }
`
