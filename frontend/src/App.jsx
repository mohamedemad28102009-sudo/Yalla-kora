import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LivePage from './pages/LivePage'
import UpcomingPage from './pages/UpcomingPage'
import FinishedPage from './pages/FinishedPage'
import StandingsPage from './pages/StandingsPage'
import TeamPage from './pages/TeamPage'
import NewsPage from './pages/NewsPage'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/finished" element={<FinishedPage />} />
          <Route path="/standings/:leagueId" element={<StandingsPage />} />
          <Route path="/team/:teamId" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
