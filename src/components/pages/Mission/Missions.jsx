import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Missions.css';
import { updateMissionStatus, fetchMissions } from '../../../redux/missions/missionsSlice';

const Missions = () => {
  const missionView = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoin = (missionId, status) => {
    const newStatus = status === 'active member' ? 'NOT A MEMBER' : 'active member';
    dispatch(updateMissionStatus({ missionId, status: newStatus }));
  };

  const view = missionView.map((mission) => (
    <tr className="container" key={mission.mission_id}>
      <td className="container-title">{mission.mission_name}</td>
      <td className="container-description">{mission.description}</td>
      <td className={mission.status === 'active member' ? 'active' : 'inactive'}>
        {mission.status}
      </td>
      <td>
        <button
          type="button"
          onClick={() => handleJoin(mission.mission_id, mission.status)}
          className={mission.status === 'active member' ? 'Leave Mission' : 'Join Mission'}
        >
          {mission.status === 'active member' ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="main-container">
      <table>
        <thead>
          <tr>
            <th className="container-title">Mission</th>
            <th className="container-title">Description</th>
            <th className="container-titl">Status</th>
          </tr>
        </thead>
        <tbody>{view}</tbody>
      </table>
    </div>
  );
};

export default Missions;
