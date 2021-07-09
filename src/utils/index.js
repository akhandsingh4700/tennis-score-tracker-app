export function extractNamesFromURL(urlpath) {
  let url = urlpath;
  let playerOne, playerTwo;
  url = url.split('&');
  if (url && url[0] && url[1]) {
    playerOne = url[0].split('=')[1];
    playerTwo = url[1].split('=')[1];
  }
  return { playerOne, playerTwo };
}
