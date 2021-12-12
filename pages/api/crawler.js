const cheerio = require("cheerio");
const rp = require("request-promise");
const url = "https://www.basketball-reference.com/teams/ORL/2022/gamelog/";

async function getGameList() {
  return fetch(url)
    .then((res) => res.text())
    .then((data) => {
      // $ now has the loaded data that we need for cheerio.
      const $ = cheerio.load(data);

      // The plan is to get a list of opponents faced, the dates they were faced, whether
      // the Magic won or lost, and then a list of links for each.  That way, we can create
      // a list of JSON objects that looks like {oppID, dateGame, gameResult, link}.

      return $("tr")
        .map(function (i, el) {
          var individualHTML = cheerio.load($(this).html());
          if ($(this).find("a").text() != "") {
            return {
              oppID: $(this).find("[data-stat=opp_id]").text(),
              dateGame: $(this).find("[data-stat=date_game]").text(),
              gameResult: $(this).find("[data-stat=game_result]").text(),
              href: $(this).find("a").text(),
            };
          }
        })
        .toArray();
    })
    .catch((err) => console.log(err));
}

export default async function handler(req, res) {
  let gameList = await getGameList();
  //   let test = await getData();
  //   console.log(test);
  res.status(200).json(gameList);
}
