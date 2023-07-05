import styled from 'styled-components'

export const notFoundMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: ${({ theme }) => theme.color.bgMain};
  color: ${({ theme }) => theme.color.textMain};
`
export const notFoundTitle = styled.div`
  font-size: 10.5rem;
  line-height: 8rem;
`
