import { NavLink } from 'react-router-dom';
import { StyledHeader } from './styled';
import { StyledGlobal } from '../../styles/Global';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledGlobal.Container>
        <StyledHeader.Wrapper>
          <Logo />

          <nav>
            <StyledHeader.List>
              {
                ['Home', 'About', 'My todos'].map(link => (
                  <li key={link}>
                    <NavLink to={link.toLowerCase().replace(/\s/g, '-') !== 'home' ? link.toLowerCase().replace(/\s/g, '-') : ''}>
                      { link }
                    </NavLink>
                  </li>
                ))
              }
            </StyledHeader.List>
          </nav>
        </StyledHeader.Wrapper>
      </StyledGlobal.Container>
    </StyledHeader>
  );
};