const playList = [
  {
    title: "Aqua Caelestis",
    src: "../assets/audio/AquaCaelestis.mp3",
  },
  {
    title: "Ennio Morricone",
    src: "../assets/audio/EnnioMorricone.mp3",
  },
  {
    title: "River Flows In You",
    src: "../assets/audio/RiverFlowsInYou.mp3",
  },
  {
    title: "Summer Wind",
    src: "../assets/audio/SummerWind.mp3",
  },
];

const playListContainer = document.querySelector(".play-list");

const createElPlayList = (i) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = playList[i].title;
  playListContainer.append(li);
};

const createPlayList = () => {
  playList.forEach((el, i) => {
    createElPlayList(i);
  });
};

export { playList, createPlayList };
