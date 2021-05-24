function buildHistogram(magazine) {
  const hash = {}

  for(let i = 0; i < magazine.length; i++) {
    const char = magazine[i]
    hash[char] ? hash[char] += 1 : hash[char] = 1
  }

  return hash
}

const canBuildNote = (magazine, note) => {
  const hash = buildHistogram(magazine)

  for(let i = 0; i < note.length; i++) {
    const char = note[i]
    console.log(char)

    if (hash[char] && hash[char] > 0) {
      hash[char] -= 1
    } else {
      return false
    }

  }

  return true
}