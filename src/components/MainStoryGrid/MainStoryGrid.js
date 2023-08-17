import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
     'main-story main-story secondary-stories'
     'advertisement advertisement advertisement'
     'opinion-stories opinion-stories opinion-stories';
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-rows: auto 150px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletOnly} {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      right: -26px;
      width: 1px;
      background-color: ${COLORS.gray[300]};
      height: 100%;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 1px;
      height: 100%;
      right: -24px;
      background-color: ${COLORS.gray[300]};
    }
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    margin-top: -16px;
  }

  @media ${QUERIES.laptopAndUp} {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      right: -24px;
      width: 1px;
      height: 100%;
      background-color: ${COLORS.gray[300]};
    }
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: ${COLORS.gray[300]};
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${COLORS.gray[300]};
      top: -24px;
    }
  }
`;

export default MainStoryGrid;
