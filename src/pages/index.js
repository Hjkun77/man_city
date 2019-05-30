import React from 'react';
import Featured from './../Components/Home/Featured/Featured';
import MatchesHome from './../Components/Home/Matches/index';
import MeetPlayers from './../Components/Home/meetPlayers/index';
import Promotion from './../Components/Home/promotion/index';

export default () => {
  return(
    <div className="bck_blue">
      <Featured/>
      <MatchesHome/>
      <MeetPlayers/>
      <Promotion/>
    </div>
  )
}
