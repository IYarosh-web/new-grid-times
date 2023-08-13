import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>

          <MainHeaderDesktop>
            <Logo />
          </MainHeaderDesktop>

          <ShowOnDesktop>
            <SubscribeWrapper>
              <Button>SUBSCRIBE</Button>
              <SubscriberLink href="#">
                Already a subscriber?
              </SubscriberLink>
            </SubscribeWrapper>
          </ShowOnDesktop>

          <HideOnDesktop>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </HideOnDesktop>
        </Row>
      </SuperHeader>
      <MainHeaderMobile>
        <Logo />
      </MainHeaderMobile>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.desktopAndUp} {
    color: ${COLORS.offblack};
    background: var(--color-gray-100);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeaderMobile = styled(MaxWidthWrapper)`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const MainHeaderDesktop = styled(MaxWidthWrapper)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: block;
  }
`;

const ShowOnDesktop = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: block;
  }
`;

const HideOnDesktop = styled.div`
  display: block;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SubscriberLink = styled.a`
  text-decoration: underline;
  font-style: italic;
`;

export default Header;
