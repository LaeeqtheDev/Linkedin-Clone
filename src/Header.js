import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsSharpIcon from '@mui/icons-material/CircleNotificationsSharp';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
         <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9IlNVSk5ocG1EUURGMjdZM09md2dmWWFfNDQwMTlfZ3IxIiB4MT0iMTkiIHgyPSIxOSIgeTE9IjI0Ljg1OCIgeTI9IjQ5LjA0MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmRjN2ZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTZhYmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1NVSk5ocG1EUURGMjdZM09md2dmWWFfNDQwMTlfZ3IxKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjIgNDhMMjIgMjYgMTYgMjYgMTYgNDggMjIgNDh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9IlNVSk5ocG1EUURGMjdZM09md2dmWWJfNDQwMTlfZ3IyIiB4MT0iMTkuMzgyIiB4Mj0iMTkuMzgyIiB5MT0iMTUuNDIzIiB5Mj0iMjMuMzQxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2ZGM3ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNmFiZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjU1VKTmhwbURRREYyN1kzT2Z3Z2ZZYl80NDAxOV9ncjIpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4zNTgsMjNjMi41MTIsMCw0LjA3Ni0xLjQ3NCw0LjA3Ni0zLjU1NCBjLTAuMDQ3LTIuMTI2LTEuNTY0LTMuNjQ5LTQuMDI4LTMuNjQ5Yy0yLjQ2NSwwLTQuMDc2LDEuNDc1LTQuMDc2LDMuNjAxYzAsMi4wOCwxLjU2MywzLjYwMiwzLjk4MSwzLjYwMkgxOS4zNThMMTkuMzU4LDIzeiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJTVUpOaHBtRFFERjI3WTNPZndnZlljXzQ0MDE5X2dyMyIgeDE9IjM3LjM4NiIgeDI9IjM3LjM4NiIgeTE9IjE0LjEyNSIgeTI9IjQ5LjUyNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmRjN2ZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTZhYmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1NVSk5ocG1EUURGMjdZM09md2dmWWNfNDQwMTlfZ3IzKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjYuOTQ2LDQ4SDM0VjM1LjkxMWMwLTAuNjQ4LDAuMTIyLTEuMjk1LDAuMzEzLTEuNzU4IGMwLjUyLTEuMjk1LDEuODc3LTIuNjM1LDMuODY3LTIuNjM1YzIuNjA3LDAsMy44MjEsMS45ODgsMy44MjEsNC45MDFWNDhoNlYzNS41ODhjMC02LjY1Ny0zLjA4NS05LjQ5OC03LjgyNi05LjQ5OCBjLTMuODg2LDAtNS4xMjQsMS45MS02LjA3MiwzLjkxSDM0di00aC03LjA1NGMwLjA5NSwyLTAuMTc1LDIyLTAuMTc1LDIySDI2Ljk0NnoiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iU1VKTmhwbURRREYyN1kzT2Z3Z2ZZZF80NDAxOV9ncjQiIHgxPSIzMiIgeDI9IjMyIiB5MT0iNi41IiB5Mj0iNTcuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWE2ZGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgyMmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1NVSk5ocG1EUURGMjdZM09md2dmWWRfNDQwMTlfZ3I0KSIgZD0iTTUwLDU3SDE0Yy0zLjg1OSwwLTctMy4xNDEtNy03VjE0YzAtMy44NTksMy4xNDEtNyw3LTdoMzZjMy44NTksMCw3LDMuMTQxLDcsN3YzNiBDNTcsNTMuODU5LDUzLjg1OSw1Nyw1MCw1N3ogTTE0LDljLTIuNzU3LDAtNSwyLjI0My01LDV2MzZjMCwyLjc1NywyLjI0Myw1LDUsNWgzNmMyLjc1NywwLDUtMi4yNDMsNS01VjE0YzAtMi43NTctMi4yNDMtNS01LTVIMTR6Ij48L3BhdGg+PC9zdmc+" alt='linkedinlogo'/>
           <div className='header__search'>
            <SearchOutlinedIcon/>
            <input type='text'/>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={CircleNotificationsSharpIcon} title="Notifications"/>
            <HeaderOption avatar="https://cdn.dribbble.com/users/1600854/screenshots/10838441/media/b60ab332b46161561702a1468cd4c286.jpg" title='me'/>
        </div>
    </div>
  )
}

export default Header