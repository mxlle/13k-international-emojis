import {
  cuteAnimals1,
  flags,
  niceFlags,
  nostalgia,
  red,
} from "../../../emojis/sets";

export const nostalgiaName = "Nostalgia";

export const gamePreconfigs = [
  {
    id: "1",
    icon: "🐣👁️",
    name: "Start here",
    config: {
      practiceMode: true,
      blindMode: false,
      level: 3,
    },
  },
  {
    id: "2",
    icon: "🐣🗣️",
    name: "Trust your ears",
    config: {
      practiceMode: true,
      blindMode: true,
      level: 6,
    },
  },
  // {
  //   id: "3",
  //   icon: "☠️👁️",
  //   name: "Meet death",
  //   config: {
  //     practiceMode: false,
  //     blindMode: false,
  //     level: 6,
  //   },
  // },
  {
    id: "4",
    icon: "☠️🗣️",
    name: "Meet death",
    config: {
      practiceMode: false,
      blindMode: true,
      level: 6,
    },
  },
  {
    id: "5",
    icon: "🌐",
    name: "Go international",
    useSecondLanguage: true,
    config: {
      practiceMode: false,
      blindMode: false,
      level: 6,
    },
  },
  {
    id: "7",
    icon: "🐶🐰🐥",
    name: "Cuteness overload",
    emojiPool: cuteAnimals1,
    config: {
      practiceMode: false,
      blindMode: false,
      level: 12,
    },
  },
  {
    id: "9",
    icon: "🍎♥️🚒",
    name: "Seeing red",
    emojiPool: red,
    emojiPoolName: "All red",
    config: {
      practiceMode: false,
      blindMode: true,
      level: 12,
    },
  },
  {
    id: "11",
    icon: "☠️",
    name: "Tru dead",
    slots: 1,
    rate: 1.2,
    config: {
      practiceMode: false,
      blindMode: true,
      level: 3,
    },
  },
  {
    id: "6",
    icon: niceFlags,
    name: "Fun with flags",
    emojiPool: flags,
    emojiPoolName: "Flags",
    config: {
      practiceMode: true,
      blindMode: false,
      level: 12,
    },
  },
  {
    id: "10",
    icon: "🌈☠️🌈",
    name: "Rainbow",
    config: {
      practiceMode: false,
      blindMode: true,
      level: 6,
      rainbowMode: true,
    },
  },
  {
    id: "8",
    icon: "🎁",
    name: "Surprise me",
    surpriseMe: true,
  },
  {
    id: "12",
    icon: nostalgia.substring(0, 3),
    name: nostalgiaName,
    emojiPool: nostalgia,
    emojiPoolName: nostalgiaName,
    config: {
      practiceMode: false,
      blindMode: true,
      level: 8,
    },
  },
];
