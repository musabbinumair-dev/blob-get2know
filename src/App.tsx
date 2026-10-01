import { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { CreateProfileScreen, UserProfile } from './screens/CreateProfileScreen';
import { InviteFriendScreen, generateInviteCode } from './screens/InviteFriendScreen';
import { JoinCodeScreen } from './screens/JoinCodeScreen';
import { TodayQuestionScreen } from './screens/TodayQuestionScreen';
import { AnswerLockedScreen } from './screens/AnswerLockedScreen';
import { NavTab } from './components/BottomNav';

type ScreenType = 'welcome' | 'create-profile' | 'invite' | 'join-code' | 'today' | 'locked';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(() => {
    if (typeof window !== 'undefined') {
      const param = new URLSearchParams(window.location.search).get('screen') as ScreenType | null;
      if (
        param &&
        ['welcome', 'create-profile', 'invite', 'join-code', 'today', 'locked'].includes(param)
      ) {
        return param;
      }
    }
    return 'locked';
  });
  const [profile, setProfile] = useState<UserProfile>({
    avatarId: 1,
    name: '',
    color: 'pink',
  });
  const [inviteCode] = useState<string>(() => generateInviteCode());

  const handleGetStarted = () => {
    setCurrentScreen('create-profile');
  };

  const handleOpenJoinCode = () => {
    setCurrentScreen('join-code');
  };

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
  };

  const handleContinueProfile = (savedProfile: UserProfile) => {
    setProfile(savedProfile);
    console.log('Saved profile in app state:', savedProfile);
    setCurrentScreen('invite');
  };

  const handleBackToProfile = () => {
    setCurrentScreen('create-profile');
  };

  const handleJoinSuccess = (joinedCode: string) => {
    console.log('Joined game with code:', joinedCode);
    setCurrentScreen('today');
  };

  const handleStartTodayFromInvite = () => {
    setCurrentScreen('today');
  };

  if (currentScreen === 'locked') {
    return (
      <AnswerLockedScreen
        friendName="Player 2"
        onEditAnswer={() => {
          localStorage.setItem('today_answer_locked', 'false');
          setCurrentScreen('today');
        }}
        onOpenSettings={() => setCurrentScreen('welcome')}
        onNavigateTab={(tab: NavTab) => {
          console.log('Navigated to tab:', tab);
          if (tab === 'today') {
            setCurrentScreen('locked');
          }
        }}
        onPlayer2Answered={() => {
          console.log('Player 2 answered');
        }}
      />
    );
  }

  if (currentScreen === 'today') {
    return (
      <TodayQuestionScreen
        onOpenSettings={() => setCurrentScreen('welcome')}
        onLockInSuccess={() => setCurrentScreen('locked')}
        onNavigateTab={(tab: NavTab) => {
          console.log('Navigated to tab:', tab);
        }}
      />
    );
  }

  if (currentScreen === 'join-code') {
    return (
      <JoinCodeScreen
        validCode={inviteCode}
        onBack={handleBackToWelcome}
        onCreateDuo={handleGetStarted}
        onJoinSuccess={handleJoinSuccess}
      />
    );
  }

  if (currentScreen === 'invite') {
    return (
      <InviteFriendScreen
        userProfile={profile}
        inviteCode={inviteCode}
        onBack={handleBackToProfile}
        onEnterGame={handleStartTodayFromInvite}
      />
    );
  }

  if (currentScreen === 'create-profile') {
    return (
      <CreateProfileScreen
        initialProfile={profile}
        onBack={handleBackToWelcome}
        onContinue={handleContinueProfile}
      />
    );
  }

  return (
    <WelcomeScreen
      onGetStarted={handleGetStarted}
      onJoinCode={handleOpenJoinCode}
    />
  );
}

export default App;
