import { React, useState } from "react";
import Team from "../Team";
import { useDispatch, useSelector } from "react-redux";
import { followActionCreator, setTeamsActionCreator, unfollowActionCreator } from "../../../../redux/team-reducer";

function TeamMap(props) {

  const dispatch = useDispatch();

  let toggleFollow = () => {
    return {
      follow: (teamID) => {
        dispatch(followActionCreator(teamID))
      },
      unfollow: (teamID) => {
        dispatch(unfollowActionCreator(teamID))
      },
      setTeams: (teams) => {
        dispatch(setTeamsActionCreator(teams))
      }
    }
  }

  const teams = useSelector(state => state.teamPage.teams);

  let teamElement = teams.map((t, team) => (
    <Team
      avatar={t.avatar}
      name={t.name}
      login={t.login}
      desc={t.desc}
      city={t.city}
      country={t.country}
      key={team}
    />
  ));

  return (
    <div>
      <>
        {teamElement}
      </>
      <div className="teammap__wrap">
        <button className="teammap__button_show">Show more</button>
      </div>
    </div>
  )
}

export default TeamMap;
