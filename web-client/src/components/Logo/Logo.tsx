import { StyledGlobal } from '../../styles/Global';
import { ComponentPropsWithoutRef } from 'react';
import { StyledLogo } from './styled';

interface LogoProps extends ComponentPropsWithoutRef<'a'> {
  width?: string,
  height?: string
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <StyledLogo>
      <StyledGlobal.Image />
    </StyledLogo>
  );
};
