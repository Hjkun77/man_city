import React from 'react';
import { Tag } from './../../ui/miscs';
import Blocks from './Blocks';

const MatchesHome = props => {
  return(
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag
          bck="#0e1731"
          size="50px"
          color="white"
        >
          Matches
        </Tag>

        <Blocks/>

        <Tag
          link={true}
          linkTo="/the_team"
          bck="white"
          size="22px"
          color="#0e1731"
        >
          See more matches
        </Tag>
      </div>
    </div>
  )
}

export default MatchesHome;
