import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Image of the ReactJS Logo" />
      <S.Title>Advanced React</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS and Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="An illustration of a developer in front of a computer"
      />
    </S.Wrapper>
  )
}

export default Main
