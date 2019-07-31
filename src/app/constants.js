export const CARD_STATES = {
  HIDDEN: "hidden",
  VISIBLE: "visible",
  INACTIVE: "inactive"
};

export const CARD_TYPES = [
  ["flower",  4],
  ["mushroom", 4],
  ["star", 4],
  ["life", 2],
  ["coin10", 2],
  ["coin20", 2]
];

export const GAME_STATES = {
  HELP: "help",
  START: "start",
  IN_PROGRESS: "inProgress",
  GAME_OVER: "gameOver",
  GAME_WON: "gameWon"
}

export const GAME_DIFFICULTY = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard"
}

export const MAX_ATTEMPTS = {
  medium: 5,
  hard: 3
}

export const MUSIC = {
  START: {
    src: "smb2-character-select.mp3",
    loop: true
  },
  IN_PROGRESS: {
    src: "smb3-wm1.mp3",
    loop: true
  },
  GAME_OVER: {
    src: "smb3_game_over.wav",
    loop: false
  },
  GAME_WON: {
    src: "smb3_level_clear.wav",
    loop: false
  },
  MATCH: {
    src: "match.wav",
    loop: false
  },
  MISMATCH: {
    src: "mismatch.wav",
    loop: false
  }
}
