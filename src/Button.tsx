import * as React from 'react'
import styled from 'styled-components'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const Button = ({ children, className, ...other }: IButtonProps) => (
  <StyledButton className={className} {...other}>
    {children}
  </StyledButton>
)

const StyledButton = styled.button`
  font-weight: 900;
  font-size: 18px;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  background: var(--geel);
  border-radius: 10px;
  border: 1px solid #011627;
  color: #011627;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  padding: 15px;

  &:disabled {
    background: grey;
    color: #002747;
  }
`

export default Button
