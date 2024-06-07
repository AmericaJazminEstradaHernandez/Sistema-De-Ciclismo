import "./sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <button className="sidebarListItemText">Crear evento</button>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <button className="sidebarListItemText">Carreras creadas</button>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <button className="sidebarListItemText">Ciclistas</button>
          </li>
          <li className="sidebarListItem"> {/* Nuevo elemento para el botón de cerrar sesión */}
            <button className="sidebarLogoutButton">Cerrar sesión</button>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        </ul>
      </div>
    </div>
  );
}
