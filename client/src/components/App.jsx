/* eslint-disable import/extensions */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Chat from './Chat';
import CreateGame from './CreateGame';
import GameView from './GameView/GameView';
import JoinGame from './JoinGame/JoinGame';
import Leaderboard from './Leaderboard/Leaderboard';
import Lobby from './Lobby';
import Login from './Login';
import SignUp from './SignUp/SignUp';
import AuthWrapper from './Auth/AuthWrapper';
import AuthTest from './Auth/AuthTest';
import UserProfile from './UserProfile/UserProfile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/create" element={<CreateGame />} />
      <Route path="/game/:id" element={<GameView />} />
      <Route path="/join" element={<JoinGame />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/authcheck"
        element={
          <AuthWrapper>
            <AuthTest />
          </AuthWrapper>
        }
      />
      <Route path="/userprofile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
