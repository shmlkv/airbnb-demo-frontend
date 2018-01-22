export function matchXs() {
  return window.matchMedia("(max-width: 575px)").matches;
}

export function matchMd() {
  return window.matchMedia("(max-width: 991px)").matches;
}
