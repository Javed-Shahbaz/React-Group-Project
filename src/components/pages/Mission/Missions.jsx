import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Missions.css';
import { updateMissionStatus, fetchMissions } from '../../../redux/missions/missionsSlice';

const Missions = () => {
  const missionView = useSelector((state) => state.missionData.missionData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoin = (missionId, status) => {
    const newStatus = status === 'active member' ? 'NOT A MEMBER' : 'active member';
    dispatch(updateMissionStatus({ missionId, status: newStatus }));
  };

  const view = missionView.map((data) => (
    <tr className="container" key={data.mission_id}>
      <td className="container-title">{data.mission_name}</td>
      <td className="container-description">{data.description}</td>
      <td className={data.status === 'active member' ? 'active' : 'inactive'}>
        {data.status}
      </td>
      <td>
        <button
          type="button"
          onClick={() => handleJoin(data.mission_id, data.status)}
          className={data.status === 'active member' ? 'Leave Mission' : 'Join Mission'}
        >
          {data.status === 'active member' ? 'Leave Mission' : 'Join Mission'}
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
            <th className="container-title">Status</th>
          </tr>
        </thead>
        <tbody>{view}</tbody>
      </table>
    </div>
  );
};

export default Missions;
