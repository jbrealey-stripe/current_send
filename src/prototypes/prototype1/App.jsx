import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BasePathContext } from '../../contexts/BasePath';
import { Sidebar } from '../../components/Sidebar';
import { Header, SandboxBanner, SANDBOX_HEIGHT } from '../../components/Header';
import ControlPanel from './ControlPanel';
import SidebarNav from './SidebarNav';
import HeaderNav from './HeaderNav';

// Pages
import Home from './pages/Home';
import Balances from './pages/Balances';
import ConnectOverview from './pages/ConnectOverview';
import ConnectedAccounts from './pages/ConnectedAccounts';
import ConnectedAccountDetail from './pages/ConnectedAccountDetail';
import Settings from './pages/Settings';

export default function Prototype1App({ basePath = '' }) {
  const [darkMode, setDarkMode] = useState(false);
  const [sandboxMode, setSandboxMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    return () => document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <BasePathContext.Provider value={basePath}>
      <div className="min-h-screen bg-surface">
        <ControlPanel
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          sandboxMode={sandboxMode}
          onToggleSandboxMode={() => setSandboxMode(!sandboxMode)}
        />

        <div className="flex flex-col min-h-screen">
          <div className="flex flex-row flex-1 bg-surface">
            {/* Sandbox Banner */}
            {sandboxMode && <SandboxBanner />}

            {/* Sidebar */}
            <Sidebar sandboxMode={sandboxMode} mobileMenuOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
              <SidebarNav />
            </Sidebar>

            {/* Header - fixed */}
            <Header sandboxMode={sandboxMode} onMenuToggle={() => setMobileMenuOpen(o => !o)}>
              <HeaderNav />
            </Header>

            {/* Main Content Area - offset for fixed sidebar and header */}
            <div className="ml-0 lg:ml-sidebar-width flex flex-col min-w-0 flex-1 relative" style={{ paddingTop: 60 + (sandboxMode ? SANDBOX_HEIGHT : 0), '--header-offset': `${60 + (sandboxMode ? SANDBOX_HEIGHT : 0)}px` }}>
              <div className="max-w-[1280px] w-full mx-auto">

                {/* Content */}
                <Routes>
                  <Route path="" element={<Home />} />
                  <Route path="balances" element={<Balances />} />
                  <Route path="connect" element={<ConnectOverview />} />
                  <Route path="connect/accounts" element={<ConnectedAccounts />} />
                  <Route path="connect/accounts/:accountId/*" element={<ConnectedAccountDetail />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to={basePath || "/"} replace />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasePathContext.Provider>
  );
}
