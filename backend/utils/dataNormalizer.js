function normalizeFixture(raw) {
  if (!raw) return null;
  return {
    id: raw.fixture?.id,
    date: raw.fixture?.date,
    status: raw.fixture?.status?.short || 'NS',
    homeTeam: {
      id: raw.teams?.home?.id,
      name: raw.teams?.home?.name,
      logo: raw.teams?.home?.logo
    },
    awayTeam: {
      id: raw.teams?.away?.id,
      name: raw.teams?.away?.name,
      logo: raw.teams?.away?.logo
    },
    goals: {
      home: raw.goals?.home ?? null,
      away: raw.goals?.away ?? null
    },
    league: raw.league?.name
  };
}

function normalizeTeam(raw) {
  if (!raw) return null;
  return {
    id: raw.team?.id,
    name: raw.team?.name,
    logo: raw.team?.logo,
    country: raw.team?.country
  };
}

function normalizeStanding(raw) {
  if (!raw) return null;
  return {
    rank: raw.rank,
    team: {
      id: raw.team?.id,
      name: raw.team?.name,
      logo: raw.team?.logo
    },
    played: raw.all?.played,
    win: raw.all?.win,
    draw: raw.all?.draw,
    lose: raw.all?.lose,
    goalsFor: raw.all?.goals?.for,
    goalsAgainst: raw.all?.goals?.against,
    goalsDiff: raw.goalsDiff,
    points: raw.points,
    form: raw.form
  };
}

module.exports = { normalizeFixture, normalizeTeam, normalizeStanding };
