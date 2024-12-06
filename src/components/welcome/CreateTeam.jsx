import { useEffect, useState } from "react";
import { searchUser } from "../../api/UserApi";
import { createTeam } from "../../api/Team";
import { useNavigate } from "react-router-dom";

export const CreateTeam = () => {
  const [search, SetSearch] = useState("");
  const [userList, setUserList] = useState([]);
  const [team, setTeam] = useState([]);
  const navigate = useNavigate();

  const changeSearch = (e) => {
    SetSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length > 0) {
      const fetchData = async () => {
        const list = await searchUser(search);
        setUserList(list);
      };

      fetchData();
    } else {
      setUserList([]);
    }
  }, [search]);

  const mouseOverTarget = (e) => {
    if (typeof e.target.className === "string") {
      if (e.target.className.indexOf("hover") > -1) {
        e.target.className = e.target.className.replaceAll(" hover", "");
      } else {
        e.target.className += " hover";
      }
    }
  };

  const clickAddTeam = (user) => {
    if (!team.includes(user)) {
      setTeam([...team, user]);
    }
  };

  const clickRemoveTeam = (user) => {
    setTeam(team.filter((prev) => prev.uid !== user.uid));
  };

  const clickCreateTeam = () => {
    const users = team.map((user) => user.uid);
    createTeam(users);
    navigate("/");
  };

  return (
    <div className="step">
      <div className="title">팀원을 초대해주세요</div>
      <div className="target2">
        <input
          placeholder="초대할 팀원의 이름을 입력해주세요"
          name="search"
          value={search}
          onChange={changeSearch}
        ></input>
        {userList.length > 0 && (
          <div className="user-list">
            {userList.map((user) => {
              return (
                <div
                  className={"user_" + user.uid}
                  key={user.uid}
                  onMouseOver={mouseOverTarget}
                  onMouseLeave={mouseOverTarget}
                  onClick={() => clickAddTeam(user)}
                >
                  {user.photo ? (
                    <img src={user.photo}></img>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                  <div>{user.name}</div>
                </div>
              );
            })}
          </div>
        )}
        <div className="selected-user">
          {team.map((user) => {
            return (
              <div className={"user_" + user.uid} key={user.uid}>
                <div>{user.name}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  onClick={() => clickRemoveTeam(user)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            );
          })}
        </div>
        <button
          className={"next-btn" + (team.length > 0 ? " active clickable" : "")}
          disabled={team.length === 0 ? true : false}
          onClick={clickCreateTeam}
        >
          다음
        </button>
      </div>
    </div>
  );
};
