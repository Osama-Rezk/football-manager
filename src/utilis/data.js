import moment from "moment";

const data = {
  count: 148,
  filters: {},
  competitions: [
    {
      id: 2006,
      area: { id: 2001, name: "Africa" },
      name: "WC Qualification",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 7,
        startDate: "2015-10-07",
        endDate: "2017-11-14",
        currentMatchday: 6,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-04T23:54:04Z"
    },
    {
      id: 2025,
      area: { id: 2011, name: "Argentina" },
      name: "Supercopa Argentina",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 430,
        startDate: "2019-04-04",
        endDate: "2019-04-04",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-03T05:08:18Z"
    },
    {
      id: 2023,
      area: { id: 2011, name: "Argentina" },
      name: "Primera B Nacional",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 295,
        startDate: "2018-08-25",
        endDate: "2019-04-20",
        currentMatchday: 25,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-09T21:45:00Z"
    },
    {
      id: 2024,
      area: { id: 2011, name: "Argentina" },
      name: "Superliga Argentina",
      code: "ASL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 282,
        startDate: "2018-08-11",
        endDate: "2019-04-07",
        currentMatchday: 25,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-04-08T20:15:13Z"
    },
    {
      id: 2147,
      area: { id: 2014, name: "Asia" },
      name: "WC Qualification",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 465,
        startDate: "2019-06-06",
        endDate: "2021-11-16",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-12T21:00:00Z"
    },
    {
      id: 2026,
      area: { id: 2015, name: "Australia" },
      name: "FFA Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 431,
        startDate: "2019-02-14",
        endDate: "2019-10-31",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-20T20:35:00Z"
    },
    {
      id: 2008,
      area: { id: 2015, name: "Australia" },
      name: "A League",
      code: "AAL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 283,
        startDate: "2018-10-19",
        endDate: "2019-04-28",
        currentMatchday: 27,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-19T13:29:43Z"
    },
    {
      id: 2027,
      area: { id: 2016, name: "Austria" },
      name: "ÖFB Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 491,
        startDate: "2019-07-14",
        endDate: "2020-05-01",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-01T18:34:58Z"
    },
    {
      id: 2022,
      area: { id: 2016, name: "Austria" },
      name: "Playoffs 1/2",
      code: "APL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 24,
        startDate: "2018-05-31",
        endDate: "2018-06-03",
        currentMatchday: null,
        winner: {
          id: 2022,
          name: "SKN Sankt Pölten",
          shortName: "St. Pölten",
          tla: "STP",
          crestUrl: null
        }
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-08-23T15:47:33Z"
    },
    {
      id: 2020,
      area: { id: 2016, name: "Austria" },
      name: "Erste Liga",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 471,
        startDate: "2019-07-21",
        endDate: "2020-05-29",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-02T18:10:00Z"
    },
    {
      id: 2012,
      area: { id: 2016, name: "Austria" },
      name: "Bundesliga",
      code: "ABL",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 470,
        startDate: "2019-07-22",
        endDate: "2020-05-26",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-02T19:59:42Z"
    },
    {
      id: 2009,
      area: { id: 2023, name: "Belgium" },
      name: "Jupiler Pro League",
      code: "BJL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 163,
        startDate: "2018-07-27",
        endDate: "2019-03-17",
        currentMatchday: 30,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-27T11:25:00Z"
    },
    {
      id: 2032,
      area: { id: 2023, name: "Belgium" },
      name: "Playoffs II",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 34,
        startDate: "2018-03-31",
        endDate: "2018-05-23",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-02T13:08:02Z"
    },
    {
      id: 2028,
      area: { id: 2023, name: "Belgium" },
      name: "Coupe de Belgique",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 166,
        startDate: "2018-07-29",
        endDate: "2019-05-31",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-01T15:34:20Z"
    },
    {
      id: 2010,
      area: { id: 2023, name: "Belgium" },
      name: "Supercoupe de Belgique",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 165,
        startDate: "2018-07-22",
        endDate: "2018-07-22",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2018-06-04T23:58:10Z"
    },
    {
      id: 2033,
      area: { id: 2023, name: "Belgium" },
      name: "Division 1B",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 164,
        startDate: "2018-08-03",
        endDate: "2019-03-01",
        currentMatchday: 28,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-23T12:50:00Z"
    },
    {
      id: 2034,
      area: { id: 2028, name: "Bolivia" },
      name: "LFPB",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 427,
        startDate: "2019-01-20",
        endDate: "2019-12-31",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-25T04:52:43Z"
    },
    {
      id: 2035,
      area: { id: 2030, name: "Bosnia and Herzegovina" },
      name: "Premier Liga",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 501,
        startDate: "2019-07-20",
        endDate: "2020-05-30",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-25T20:59:43Z"
    },
    {
      id: 2013,
      area: { id: 2032, name: "Brazil" },
      name: "Série A",
      code: "BSA",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 460,
        startDate: "2019-04-28",
        endDate: "2019-12-08",
        currentMatchday: 10,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-14T12:49:57Z"
    },
    {
      id: 2036,
      area: { id: 2032, name: "Brazil" },
      name: "Série C",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 462,
        startDate: "2019-04-27",
        endDate: "2019-10-06",
        currentMatchday: 10,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-28T02:10:38Z"
    },
    {
      id: 2037,
      area: { id: 2032, name: "Brazil" },
      name: "Copa do Brasil",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 432,
        startDate: "2019-02-06",
        endDate: "2019-09-11",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-07T02:55:37Z"
    },
    {
      id: 2029,
      area: { id: 2032, name: "Brazil" },
      name: "Série B",
      code: "BSB",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 461,
        startDate: "2019-04-26",
        endDate: "2019-11-30",
        currentMatchday: 9,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-12T05:29:57Z"
    },
    {
      id: 2038,
      area: { id: 2032, name: "Brazil" },
      name: "Série D",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 463,
        startDate: "2019-04-05",
        endDate: "2019-08-18",
        currentMatchday: 6,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-24T16:30:00Z"
    },
    {
      id: 2039,
      area: { id: 2035, name: "Bulgaria" },
      name: "Kupa na Bulgarija",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 419,
        startDate: "2018-09-25",
        endDate: "2019-05-31",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-15T19:07:43Z"
    },
    {
      id: 2040,
      area: { id: 2035, name: "Bulgaria" },
      name: "A PFG",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 492,
        startDate: "2019-07-12",
        endDate: "2020-05-30",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-28T21:39:22Z"
    },
    {
      id: 2041,
      area: { id: 2040, name: "Canada" },
      name: "Canadian Championship",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 433,
        startDate: "2019-05-15",
        endDate: "2019-09-25",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-13T21:57:58Z"
    },
    {
      id: 2043,
      area: { id: 2045, name: "Chile" },
      name: "Supercopa de Chile",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 435,
        startDate: "2019-03-23",
        endDate: "2019-03-23",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-03-24T20:10:07Z"
    },
    {
      id: 2048,
      area: { id: 2045, name: "Chile" },
      name: "Primera División",
      code: "CPD",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 434,
        startDate: "2019-02-17",
        endDate: "2019-12-07",
        currentMatchday: 15,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-13T21:59:37Z"
    },
    {
      id: 2042,
      area: { id: 2045, name: "Chile" },
      name: "Playoffs 1/2",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 44,
        startDate: "2017-11-25",
        endDate: "2017-12-21",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:01:23Z"
    },
    {
      id: 2044,
      area: { id: 2046, name: "China PR" },
      name: "Chinese Super League",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 436,
        startDate: "2019-03-01",
        endDate: "2019-12-01",
        currentMatchday: 15,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-24T12:40:01Z"
    },
    {
      id: 2045,
      area: { id: 2049, name: "Colombia" },
      name: "Liga Postobón",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 437,
        startDate: "2019-01-27",
        endDate: "2019-12-14",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-13T21:57:58Z"
    },
    {
      id: 2046,
      area: { id: 2049, name: "Colombia" },
      name: "Superliga de Colombia",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 438,
        startDate: "2019-01-24",
        endDate: "2019-01-27",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2018-06-05T00:02:32Z"
    },
    {
      id: 2047,
      area: { id: 2058, name: "Croatia" },
      name: "Prva Liga",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 493,
        startDate: "2019-07-20",
        endDate: "2020-05-17",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-27T22:10:03Z"
    },
    {
      id: 2049,
      area: { id: 2062, name: "Czech Republic" },
      name: "Synot Liga",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 502,
        startDate: "2019-07-13",
        endDate: "2020-06-01",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-02T06:20:02Z"
    },
    {
      id: 2051,
      area: { id: 2065, name: "Denmark" },
      name: "DBU Pokalen",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 173,
        startDate: "2018-08-07",
        endDate: "2019-05-31",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-17T23:50:13Z"
    },
    {
      id: 2141,
      area: { id: 2065, name: "Denmark" },
      name: "Play Offs 1/2",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: null,
      numberOfAvailableSeasons: 0,
      lastUpdated: "2018-07-13T13:34:22Z"
    },
    {
      id: 2050,
      area: { id: 2065, name: "Denmark" },
      name: "Superliga",
      code: "DSU",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 494,
        startDate: "2019-07-12",
        endDate: "2020-05-30",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-03T18:40:02Z"
    },
    {
      id: 2052,
      area: { id: 2069, name: "Ecuador" },
      name: "Copa Pilsener Serie A",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 439,
        startDate: "2019-02-10",
        endDate: "2019-12-15",
        currentMatchday: 16,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-27T21:15:03Z"
    },
    {
      id: 2056,
      area: { id: 2072, name: "England" },
      name: "FA Community Shield",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 472,
        startDate: "2019-08-04",
        endDate: "2019-08-04",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:05:10Z"
    },
    {
      id: 2021,
      area: { id: 2072, name: "England" },
      name: "Premier League",
      code: "PL",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 468,
        startDate: "2019-08-10",
        endDate: "2020-05-17",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 27,
      lastUpdated: "2019-05-12T20:05:45Z"
    },
    {
      id: 2053,
      area: { id: 2072, name: "England" },
      name: "National League",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 174,
        startDate: "2018-08-04",
        endDate: "2019-04-27",
        currentMatchday: 46,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-11T20:41:05Z"
    },
    {
      id: 2054,
      area: { id: 2072, name: "England" },
      name: "League Two",
      code: "EL2",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 512,
        startDate: "2019-08-03",
        endDate: "2020-05-25",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-25T20:18:05Z"
    },
    {
      id: 2139,
      area: { id: 2072, name: "England" },
      name: "Football League Cup",
      code: "FLC",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 505,
        startDate: "2019-08-12",
        endDate: "2020-03-01",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-02-24T21:43:52Z"
    },
    {
      id: 2030,
      area: { id: 2072, name: "England" },
      name: "League One",
      code: "EL1",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 504,
        startDate: "2019-08-03",
        endDate: "2020-05-26",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 11,
      lastUpdated: "2019-05-26T21:12:05Z"
    },
    {
      id: 2055,
      area: { id: 2072, name: "England" },
      name: "FA Cup",
      code: "FAC",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 207,
        startDate: "2018-08-10",
        endDate: "2019-05-18",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-19T07:00:00Z"
    },
    {
      id: 2016,
      area: { id: 2072, name: "England" },
      name: "Championship",
      code: "ELC",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 503,
        startDate: "2019-08-02",
        endDate: "2020-05-27",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-27T22:51:02Z"
    },
    {
      id: 2057,
      area: { id: 2075, name: "Estonia" },
      name: "Meistriliiga",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 440,
        startDate: "2019-03-08",
        endDate: "2019-11-09",
        currentMatchday: 18,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-23T05:05:01Z"
    },
    {
      id: 2001,
      area: { id: 2077, name: "Europe" },
      name: "UEFA Champions League",
      code: "CL",
      emblemUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg",
      plan: "TIER_ONE",
      currentSeason: {
        id: 495,
        startDate: "2019-06-25",
        endDate: "2020-05-30",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 19,
      lastUpdated: "2019-06-25T23:47:38Z"
    },
    {
      id: 2018,
      area: { id: 2077, name: "Europe" },
      name: "European Championship",
      code: "EC",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 507,
        startDate: "2020-06-12",
        endDate: "2020-07-12",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2018-08-23T12:16:01Z"
    },
    {
      id: 2058,
      area: { id: 2077, name: "Europe" },
      name: "UEFA Women's EURO",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 62,
        startDate: "2017-07-16",
        endDate: "2017-08-06",
        currentMatchday: 3,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:06:08Z"
    },
    {
      id: 2007,
      area: { id: 2077, name: "Europe" },
      name: "WC Qualification",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 8,
        startDate: "2016-09-04",
        endDate: "2017-11-14",
        currentMatchday: 10,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:06:41Z"
    },
    {
      id: 2146,
      area: { id: 2077, name: "Europe" },
      name: "UEFA Europa League",
      code: "EL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 506,
        startDate: "2019-06-27",
        endDate: "2020-05-27",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-28T00:05:00Z"
    },
    {
      id: 2031,
      area: { id: 2080, name: "Finland" },
      name: "Veikkausliiga",
      code: "VEI",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 441,
        startDate: "2019-04-01",
        endDate: "2019-10-31",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-25T20:44:59Z"
    },
    {
      id: 2059,
      area: { id: 2080, name: "Finland" },
      name: "Suomen Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 442,
        startDate: "2019-01-18",
        endDate: "2019-08-31",
        currentMatchday: 5,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-15T18:25:58Z"
    },
    {
      id: 2143,
      area: { id: 2081, name: "France" },
      name: "Playoffs 1/2",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 211,
        startDate: "2018-05-23",
        endDate: "2018-05-27",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-07-12T14:32:17Z"
    },
    {
      id: 2144,
      area: { id: 2081, name: "France" },
      name: "Playoffs 2/3",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 212,
        startDate: "2018-05-22",
        endDate: "2018-05-27",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-09-25T15:07:37Z"
    },
    {
      id: 2142,
      area: { id: 2081, name: "France" },
      name: "Ligue 2",
      code: "FL2",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 500,
        startDate: "2019-07-26",
        endDate: "2020-05-31",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 22,
      lastUpdated: "2019-06-03T21:25:02Z"
    },
    {
      id: 2138,
      area: { id: 2081, name: "France" },
      name: "Coupe de France",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 418,
        startDate: "2018-11-17",
        endDate: "2019-04-27",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-04-28T09:35:22Z"
    },
    {
      id: 2015,
      area: { id: 2081, name: "France" },
      name: "Ligue 1",
      code: "FL1",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 499,
        startDate: "2019-08-10",
        endDate: "2020-05-31",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 9,
      lastUpdated: "2019-06-03T09:55:00Z"
    },
    {
      id: 2135,
      area: { id: 2081, name: "France" },
      name: "Coupe de la Ligue",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 284,
        startDate: "2018-08-14",
        endDate: "2019-03-30",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-03-31T08:15:18Z"
    },
    {
      id: 2136,
      area: { id: 2081, name: "France" },
      name: "Trophée des Champions",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 466,
        startDate: "2019-08-03",
        endDate: "2019-08-03",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:08:21Z"
    },
    {
      id: 2129,
      area: { id: 2088, name: "Germany" },
      name: "Regionalliga",
      code: "REG",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 477,
        startDate: "2019-07-11",
        endDate: "2020-05-30",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-27T11:35:04Z"
    },
    {
      id: 2133,
      area: { id: 2088, name: "Germany" },
      name: "Frauen Bundesliga",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 142,
        startDate: "2017-09-02",
        endDate: "2018-06-03",
        currentMatchday: 22,
        winner: {
          id: 7522,
          name: "VfL Wolfsburg",
          shortName: null,
          tla: null,
          crestUrl: null
        }
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:09:39Z"
    },
    {
      id: 2134,
      area: { id: 2088, name: "Germany" },
      name: "DFL Super Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 478,
        startDate: "2019-08-03",
        endDate: "2019-08-03",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:10:19Z"
    },
    {
      id: 2002,
      area: { id: 2088, name: "Germany" },
      name: "Bundesliga",
      code: "BL1",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 155,
        startDate: "2018-08-24",
        endDate: "2019-05-18",
        currentMatchday: 34,
        winner: null
      },
      numberOfAvailableSeasons: 24,
      lastUpdated: "2019-05-27T22:30:42Z"
    },
    {
      id: 2011,
      area: { id: 2088, name: "Germany" },
      name: "DFB-Pokal",
      code: "DFB",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 473,
        startDate: "2019-08-09",
        endDate: "2020-05-23",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-26T16:40:04Z"
    },
    {
      id: 2004,
      area: { id: 2088, name: "Germany" },
      name: "2. Bundesliga",
      code: "BL2",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 157,
        startDate: "2018-08-03",
        endDate: "2019-05-19",
        currentMatchday: 34,
        winner: null
      },
      numberOfAvailableSeasons: 24,
      lastUpdated: "2019-05-28T21:09:43Z"
    },
    {
      id: 2140,
      area: { id: 2088, name: "Germany" },
      name: "3. Liga",
      code: "BL3",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 476,
        startDate: "2019-07-11",
        endDate: "2020-05-26",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 8,
      lastUpdated: "2019-05-28T21:14:43Z"
    },
    {
      id: 2131,
      area: { id: 2093, name: "Greece" },
      name: "Greek Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 420,
        startDate: "2018-08-26",
        endDate: "2019-08-26",
        currentMatchday: 3,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-11T20:33:25Z"
    },
    {
      id: 2132,
      area: { id: 2093, name: "Greece" },
      name: "Super League",
      code: "GSL",
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 299,
        startDate: "2018-08-25",
        endDate: "2019-05-05",
        currentMatchday: 30,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-22T20:58:03Z"
    },
    {
      id: 2130,
      area: { id: 2106, name: "Hungary" },
      name: "Magyar Kupa",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 297,
        startDate: "2019-09-22",
        endDate: "2019-05-01",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-26T16:40:04Z"
    },
    {
      id: 2128,
      area: { id: 2106, name: "Hungary" },
      name: "NB I",
      code: "HNB",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 179,
        startDate: "2018-07-21",
        endDate: "2019-05-19",
        currentMatchday: 33,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-20T13:40:04Z"
    },
    {
      id: 2127,
      area: { id: 2107, name: "Iceland" },
      name: "Úrvalsdeild",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 443,
        startDate: "2019-04-26",
        endDate: "2019-09-28",
        currentMatchday: 11,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-24T14:55:01Z"
    },
    {
      id: 2126,
      area: { id: 2108, name: "India" },
      name: "I-League",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 421,
        startDate: "2018-10-26",
        endDate: "2019-03-03",
        currentMatchday: 21,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-03-09T17:47:37Z"
    },
    {
      id: 2125,
      area: { id: 2113, name: "Israel" },
      name: "Ligat ha'Al",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 205,
        startDate: "2018-08-25",
        endDate: "2019-05-25",
        currentMatchday: 10,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-26T16:40:04Z"
    },
    {
      id: 2121,
      area: { id: 2114, name: "Italy" },
      name: "Serie B",
      code: "SB",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 294,
        startDate: "2018-08-24",
        endDate: "2019-05-11",
        currentMatchday: 38,
        winner: null
      },
      numberOfAvailableSeasons: 14,
      lastUpdated: "2019-06-10T13:10:03Z"
    },
    {
      id: 2122,
      area: { id: 2114, name: "Italy" },
      name: "Coppa Italia",
      code: "CIT",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 285,
        startDate: "2018-07-28",
        endDate: "2019-05-15",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-15T21:51:04Z"
    },
    {
      id: 2123,
      area: { id: 2114, name: "Italy" },
      name: "Serie C",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 298,
        startDate: "2018-09-16",
        endDate: "2019-05-05",
        currentMatchday: 38,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-15T22:41:58Z"
    },
    {
      id: 2019,
      area: { id: 2114, name: "Italy" },
      name: "Serie A",
      code: "SA",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 290,
        startDate: "2018-08-18",
        endDate: "2019-05-26",
        currentMatchday: 38,
        winner: null
      },
      numberOfAvailableSeasons: 14,
      lastUpdated: "2019-05-27T15:35:05Z"
    },
    {
      id: 2124,
      area: { id: 2114, name: "Italy" },
      name: "Supercoppa",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 159,
        startDate: "2019-01-12",
        endDate: "2019-01-12",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-01-17T08:15:01Z"
    },
    {
      id: 2117,
      area: { id: 2116, name: "Japan" },
      name: "J. League Division 2",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 445,
        startDate: "2019-02-24",
        endDate: "2019-11-24",
        currentMatchday: 20,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-23T15:49:58Z"
    },
    {
      id: 2118,
      area: { id: 2116, name: "Japan" },
      name: "J.League Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 446,
        startDate: "2019-03-06",
        endDate: "2019-10-26",
        currentMatchday: 6,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-27T14:15:00Z"
    },
    {
      id: 2119,
      area: { id: 2116, name: "Japan" },
      name: "J. League",
      code: "JJL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 444,
        startDate: "2019-02-22",
        endDate: "2019-12-07",
        currentMatchday: 17,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-24T12:40:02Z"
    },
    {
      id: 2120,
      area: { id: 2116, name: "Japan" },
      name: "Super Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 447,
        startDate: "2019-02-16",
        endDate: "2019-02-16",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2018-06-05T00:15:43Z"
    },
    {
      id: 2116,
      area: { id: 2129, name: "Latvia" },
      name: "Virslīga",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 448,
        startDate: "2019-03-09",
        endDate: "2019-11-09",
        currentMatchday: 20,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-27T13:50:00Z"
    },
    {
      id: 2115,
      area: { id: 2135, name: "Lithuania" },
      name: "A Lyga",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 467,
        startDate: "2019-03-02",
        endDate: "2019-10-26",
        currentMatchday: 16,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-28T14:00:04Z"
    },
    {
      id: 2114,
      area: { id: 2143, name: "Malta" },
      name: "Premier League",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 160,
        startDate: "2018-08-17",
        endDate: "2019-04-25",
        currentMatchday: 25,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-05T18:55:22Z"
    },
    {
      id: 2111,
      area: { id: 2149, name: "Mexico" },
      name: "Copa MX",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 479,
        startDate: "2019-07-30",
        endDate: "2020-04-15",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-04-12T21:15:01Z"
    },
    {
      id: 2112,
      area: { id: 2149, name: "Mexico" },
      name: "SuperCopa MX",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 480,
        startDate: "2019-07-14",
        endDate: "2019-07-14",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:17:16Z"
    },
    {
      id: 2113,
      area: { id: 2149, name: "Mexico" },
      name: "Liga MX",
      code: "LMX",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 186,
        startDate: "2018-07-21",
        endDate: "2018-11-25",
        currentMatchday: 17,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-27T12:18:42Z"
    },
    {
      id: 2005,
      area: { id: 2163, name: "Netherlands" },
      name: "Jupiler League",
      code: "DJL",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 482,
        startDate: "2019-08-09",
        endDate: "2020-05-01",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-29T14:25:00Z"
    },
    {
      id: 2109,
      area: { id: 2163, name: "Netherlands" },
      name: "KNVB Beker",
      code: "KNV",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 181,
        startDate: "2018-08-18",
        endDate: "2018-08-25",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-06T23:40:13Z"
    },
    {
      id: 2003,
      area: { id: 2163, name: "Netherlands" },
      name: "Eredivisie",
      code: "DED",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 481,
        startDate: "2019-08-09",
        endDate: "2020-05-25",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 10,
      lastUpdated: "2019-05-28T23:44:43Z"
    },
    {
      id: 2110,
      area: { id: 2163, name: "Netherlands" },
      name: "Johan Cruijff Schaal",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 483,
        startDate: "2019-07-27",
        endDate: "2019-07-27",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:18:23Z"
    },
    {
      id: 2107,
      area: { id: 2171, name: "Northern Ireland" },
      name: "Premiership",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 496,
        startDate: "2019-08-10",
        endDate: "2020-05-11",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-11T21:12:05Z"
    },
    {
      id: 2108,
      area: { id: 2171, name: "Northern Ireland" },
      name: "League Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 203,
        startDate: "2018-08-04",
        endDate: "2019-02-16",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-02-16T21:39:28Z"
    },
    {
      id: 2104,
      area: { id: 2173, name: "Norway" },
      name: "Playoffs 1/2",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 112,
        startDate: "2017-11-29",
        endDate: "2017-12-02",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:20:23Z"
    },
    {
      id: 2105,
      area: { id: 2173, name: "Norway" },
      name: "1. divisjon",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 450,
        startDate: "2019-03-30",
        endDate: "2019-11-27",
        currentMatchday: 13,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-24T16:25:02Z"
    },
    {
      id: 2106,
      area: { id: 2173, name: "Norway" },
      name: "Tippeligaen",
      code: "TIP",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 449,
        startDate: "2019-03-30",
        endDate: "2019-11-30",
        currentMatchday: 13,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-24T16:25:01Z"
    },
    {
      id: 2103,
      area: { id: 2175, name: "Oceania" },
      name: "WC Qualification",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 111,
        startDate: "2015-08-31",
        endDate: "2017-09-05",
        currentMatchday: 6,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:20:43Z"
    },
    {
      id: 2102,
      area: { id: 2181, name: "Panama" },
      name: "Liga Panameña de Fútbol",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 422,
        startDate: "2018-07-28",
        endDate: "2019-05-31",
        currentMatchday: 18,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-02T04:01:02Z"
    },
    {
      id: 2101,
      area: { id: 2184, name: "Peru" },
      name: "Primera División",
      code: "PPD",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 451,
        startDate: "2019-02-17",
        endDate: "2019-11-24",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-12T01:30:00Z"
    },
    {
      id: 2099,
      area: { id: 2186, name: "Poland" },
      name: "Superpuchar Polski",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 498,
        startDate: "2019-07-13",
        endDate: "2020-07-13",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:21:44Z"
    },
    {
      id: 2100,
      area: { id: 2186, name: "Poland" },
      name: "Puchar Polski",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 497,
        startDate: "2019-08-07",
        endDate: "2020-05-02",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-02T17:07:58Z"
    },
    {
      id: 2097,
      area: { id: 2187, name: "Portugal" },
      name: "Supertaça Cândido de Oliveira",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 485,
        startDate: "2019-08-03",
        endDate: "2019-08-03",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:22:37Z"
    },
    {
      id: 2017,
      area: { id: 2187, name: "Portugal" },
      name: "Primeira Liga",
      code: "PPL",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 484,
        startDate: "2019-08-10",
        endDate: "2020-05-19",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 9,
      lastUpdated: "2019-05-20T22:05:06Z"
    },
    {
      id: 2098,
      area: { id: 2187, name: "Portugal" },
      name: "Taça de Portugal",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 425,
        startDate: "2018-09-09",
        endDate: "2019-05-26",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-25T21:25:14Z"
    },
    {
      id: 2096,
      area: { id: 2187, name: "Portugal" },
      name: "Liga2 Cabovisão",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 184,
        startDate: "2018-08-11",
        endDate: "2019-05-19",
        currentMatchday: 34,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-20T20:10:07Z"
    },
    {
      id: 2095,
      area: { id: 2192, name: "Republic of Ireland" },
      name: "Premier Division",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 424,
        startDate: "2019-02-15",
        endDate: "2019-10-27",
        currentMatchday: 22,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-15T13:35:02Z"
    },
    {
      id: 2093,
      area: { id: 2194, name: "Romania" },
      name: "Supercupa României",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 202,
        startDate: "2018-07-14",
        endDate: "2018-07-14",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2018-06-05T00:23:54Z"
    },
    {
      id: 2094,
      area: { id: 2194, name: "Romania" },
      name: "Liga I",
      code: "RL1",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 185,
        startDate: "2018-07-20",
        endDate: "2019-03-02",
        currentMatchday: 26,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-12T19:59:37Z"
    },
    {
      id: 2092,
      area: { id: 2194, name: "Romania" },
      name: "Liga II",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 423,
        startDate: "2018-07-21",
        endDate: "2019-05-31",
        currentMatchday: 38,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-02T19:45:03Z"
    },
    {
      id: 2137,
      area: { id: 2195, name: "Russia" },
      name: "RFPL",
      code: "RFPL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 487,
        startDate: "2019-07-28",
        endDate: "2020-06-02",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-03T18:35:04Z"
    },
    {
      id: 2088,
      area: { id: 2195, name: "Russia" },
      name: "FNL",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 486,
        startDate: "2019-07-07",
        endDate: "2020-05-16",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-02T18:09:26Z"
    },
    {
      id: 2091,
      area: { id: 2195, name: "Russia" },
      name: "Russian Super Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 199,
        startDate: "2018-07-27",
        endDate: "2018-07-27",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2018-06-05T00:24:42Z"
    },
    {
      id: 2089,
      area: { id: 2195, name: "Russia" },
      name: "Russian Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 287,
        startDate: "2018-07-21",
        endDate: "2019-05-31",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-23T15:45:02Z"
    },
    {
      id: 2090,
      area: { id: 2195, name: "Russia" },
      name: "Playoffs 1/2",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 96,
        startDate: "2018-05-17",
        endDate: "2018-05-20",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:24:32Z"
    },
    {
      id: 2087,
      area: { id: 2204, name: "Scotland" },
      name: "Scottish Cup",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 288,
        startDate: "2018-08-11",
        endDate: "2019-05-31",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-25T18:54:27Z"
    },
    {
      id: 2084,
      area: { id: 2204, name: "Scotland" },
      name: "Premier League",
      code: "SPL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 508,
        startDate: "2019-08-03",
        endDate: "2020-05-30",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-20T20:45:07Z"
    },
    {
      id: 2085,
      area: { id: 2204, name: "Scotland" },
      name: "Championship",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 509,
        startDate: "2019-08-03",
        endDate: "2020-05-02",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-26T21:12:08Z"
    },
    {
      id: 2086,
      area: { id: 2204, name: "Scotland" },
      name: "Playoffs 2/3",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 92,
        startDate: "2018-05-02",
        endDate: "2018-05-13",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:25:54Z"
    },
    {
      id: 2083,
      area: { id: 2219, name: "South Africa" },
      name: "ABSA Premiership",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 289,
        startDate: "2018-08-04",
        endDate: "2019-08-11",
        currentMatchday: 30,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-12T18:20:16Z"
    },
    {
      id: 2080,
      area: { id: 2220, name: "South America" },
      name: "Copa America",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 452,
        startDate: "2019-06-14",
        endDate: "2019-07-07",
        currentMatchday: 3,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-28T05:29:39Z"
    },
    {
      id: 2081,
      area: { id: 2220, name: "South America" },
      name: "Copa Sudamericana",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 428,
        startDate: "2019-02-06",
        endDate: "2019-11-09",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-31T21:10:00Z"
    },
    {
      id: 2082,
      area: { id: 2220, name: "South America" },
      name: "WC Qualification",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 88,
        startDate: "2015-10-08",
        endDate: "2017-10-11",
        currentMatchday: 18,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:27:01Z"
    },
    {
      id: 2079,
      area: { id: 2224, name: "Spain" },
      name: "Copa del Rey",
      code: "CDR",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 291,
        startDate: "2018-09-05",
        endDate: "2019-03-30",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-26T16:40:06Z"
    },
    {
      id: 2014,
      area: { id: 2224, name: "Spain" },
      name: "Primera Division",
      code: "PD",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 281,
        startDate: "2018-08-17",
        endDate: "2019-05-26",
        currentMatchday: 38,
        winner: null
      },
      numberOfAvailableSeasons: 26,
      lastUpdated: "2019-05-19T22:40:09Z"
    },
    {
      id: 2077,
      area: { id: 2224, name: "Spain" },
      name: "Segunda División",
      code: "SD",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 286,
        startDate: "2018-08-17",
        endDate: "2019-06-09",
        currentMatchday: 42,
        winner: null
      },
      numberOfAvailableSeasons: 7,
      lastUpdated: "2019-06-24T22:55:02Z"
    },
    {
      id: 2078,
      area: { id: 2224, name: "Spain" },
      name: "Supercopa de España",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 510,
        startDate: "2020-01-08",
        endDate: "2020-01-12",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:27:12Z"
    },
    {
      id: 2074,
      area: { id: 2233, name: "Sweden" },
      name: "Superettan",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 454,
        startDate: "2019-03-31",
        endDate: "2019-11-02",
        currentMatchday: 15,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-26T13:35:01Z"
    },
    {
      id: 2075,
      area: { id: 2233, name: "Sweden" },
      name: "Playoffs 2/3",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 79,
        startDate: "2017-11-08",
        endDate: "2017-11-11",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:28:43Z"
    },
    {
      id: 2076,
      area: { id: 2233, name: "Sweden" },
      name: "Playoffs 1/2",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 80,
        startDate: "2017-11-15",
        endDate: "2017-11-19",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-05T00:28:54Z"
    },
    {
      id: 2073,
      area: { id: 2233, name: "Sweden" },
      name: "Allsvenskan",
      code: "ALL",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 453,
        startDate: "2019-03-31",
        endDate: "2019-11-02",
        currentMatchday: 13,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-28T17:10:18Z"
    },
    {
      id: 2071,
      area: { id: 2234, name: "Switzerland" },
      name: "Schweizer Pokal",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 489,
        startDate: "2019-08-20",
        endDate: "2020-05-24",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-05-19T16:51:11Z"
    },
    {
      id: 2072,
      area: { id: 2234, name: "Switzerland" },
      name: "Super League",
      code: "SSL",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 488,
        startDate: "2019-07-20",
        endDate: "2020-05-28",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-02T19:14:46Z"
    },
    {
      id: 2070,
      area: { id: 2247, name: "Turkey" },
      name: "Süper Lig",
      code: "TSL",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 192,
        startDate: "2018-08-10",
        endDate: "2019-05-26",
        currentMatchday: 34,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-26T21:17:29Z"
    },
    {
      id: 2068,
      area: { id: 2247, name: "Turkey" },
      name: "1. Lig",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 193,
        startDate: "2018-08-10",
        endDate: "2019-05-18",
        currentMatchday: 34,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-31T00:25:01Z"
    },
    {
      id: 2069,
      area: { id: 2247, name: "Turkey" },
      name: "TFF Süper Kupa",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 511,
        startDate: "2019-08-07",
        endDate: "2019-08-07",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2018-06-05T00:30:33Z"
    },
    {
      id: 2066,
      area: { id: 2253, name: "Ukraine" },
      name: "Playoffs 1/2",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 70,
        startDate: "2018-05-23",
        endDate: "2018-05-27",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-02T14:03:07Z"
    },
    {
      id: 2064,
      area: { id: 2253, name: "Ukraine" },
      name: "Premier Liha",
      code: "UPL",
      emblemUrl: null,
      plan: "TIER_THREE",
      currentSeason: {
        id: 490,
        startDate: "2019-07-28",
        endDate: "2020-05-21",
        currentMatchday: 1,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-06-09T15:05:02Z"
    },
    {
      id: 2067,
      area: { id: 2253, name: "Ukraine" },
      name: "Superkubok Ukrainy",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 191,
        startDate: "2018-07-21",
        endDate: "2018-07-21",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2018-06-05T00:30:59Z"
    },
    {
      id: 2065,
      area: { id: 2253, name: "Ukraine" },
      name: "Kubok Ukrainy",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 190,
        startDate: "2018-07-17",
        endDate: "2019-05-15",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-16T17:20:03Z"
    },
    {
      id: 2145,
      area: { id: 2256, name: "United States" },
      name: "MLS",
      code: "MLS",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 429,
        startDate: "2019-03-02",
        endDate: "2019-11-10",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-28T00:00:08Z"
    },
    {
      id: 2063,
      area: { id: 2257, name: "Uruguay" },
      name: "Primera División",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 455,
        startDate: "2019-02-16",
        endDate: "2019-11-30",
        currentMatchday: 15,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-05T21:56:18Z"
    },
    {
      id: 2062,
      area: { id: 2262, name: "Venezuela" },
      name: "Primera División",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 456,
        startDate: "2019-01-25",
        endDate: "2019-12-07",
        currentMatchday: 19,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-24T19:45:03Z"
    },
    {
      id: 2061,
      area: { id: 2263, name: "Vietnam" },
      name: "V-League",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 457,
        startDate: "2019-02-23",
        endDate: "2019-12-07",
        currentMatchday: 14,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-06-17T13:50:02Z"
    },
    {
      id: 2060,
      area: { id: 2264, name: "Wales" },
      name: "Welsh Premier League",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 188,
        startDate: "2018-08-10",
        endDate: "2019-01-12",
        currentMatchday: 22,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-19T20:58:33Z"
    },
    {
      id: 2000,
      area: { id: 2267, name: "World" },
      name: "FIFA World Cup",
      code: "WC",
      emblemUrl: null,
      plan: "TIER_ONE",
      currentSeason: {
        id: 1,
        startDate: "2018-06-14",
        endDate: "2018-07-15",
        currentMatchday: 3,
        winner: {
          id: 773,
          name: "France",
          shortName: "France",
          tla: "FRA",
          crestUrl:
            "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
        }
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2018-08-23T12:16:17Z"
    }
  ]
};

const League = {
  name: "XXX",
  teams: [
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    },
    {
      name: "x1",
      id: 10
    }
  ]
};
const team = {
  name: "team1",
  games: [
    {
      time: "15:20",
      data: moment(new Date()).format("MMM Do YY")
    },

    {
      team1: "team1",
      team2: "team2",
      data: moment(new Date()).format("MMM Do YY"),
      result: "2:1"
    },
    {
      time: "15:20",
      data: moment(new Date()).format("MMM Do YY")
    },

    {
      team1: "team1",
      team2: "team2",
      data: moment(new Date()).format("MMM Do YY"),
      result: "2:1"
    },
    {
      time: "15:20",
      data: moment(new Date()).format("MMM Do YY")
    },

    {
      team1: "team1",
      team2: "team2",
      data: moment(new Date()).format("MMM Do YY"),
      result: "2:1"
    },
    {
      time: "15:20",
      data: moment(new Date()).format("MMM Do YY")
    },

    {
      team1: "team1",
      team2: "team2",
      data: moment(new Date()).format("MMM Do YY"),
      result: "2:1"
    }
  ]
};
export { data, League, team };
