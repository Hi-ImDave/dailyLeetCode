var truncateSentence = function (s, k) {
  return s.split(' ').slice(0, k).join(' ')
}

truncateSentence('Hello how are you Contestant', 4)
