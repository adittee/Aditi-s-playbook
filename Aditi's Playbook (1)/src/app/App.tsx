import { useState } from 'react';
import { BootScreen } from './components/BootScreen';
import { AboutPage } from './components/AboutPage';
import { Desktop } from './components/Desktop';
import { ContentPage } from './components/ContentPage';
import { CRTEffect } from './components/CRTEffect';

export default function App() {
  const [showBoot, setShowBoot] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  const handleBootComplete = () => {
    setShowBoot(false);
    setShowAbout(true);
  };

  const handleAboutComplete = () => {
    setShowAbout(false);
  };

  const handleBackToAbout = () => {
    setShowAbout(true);
    setCurrentPage(null);
  };

  return (
    <div className="size-full relative overflow-hidden">
      <CRTEffect />
      {showBoot ? (
        <BootScreen onComplete={handleBootComplete} />
      ) : showAbout ? (
        <AboutPage onContinue={handleAboutComplete} />
      ) : currentPage ? (
        <ContentPage
          folderId={currentPage}
          onBack={() => setCurrentPage(null)}
        />
      ) : (
        <Desktop
          onFolderClick={(id) => setCurrentPage(id)}
          onBackToAbout={handleBackToAbout}
        />
      )}
    </div>
  );
}
