// Replace 'YOUR_API_KEY' with the actual API key you obtained.
const apiKey = "AIzaSyDfsiCaI4pqv-i5-nNrJ24B9bp0_omENzw";

// Replace 'YOUR_VIDEO_ID' with the unlisted YouTube video ID you want to play.
const videoId = "UCNJcSUSzUeFm8W9P7UUlSeQ";

function onYouTubeIframeAPIReady() {
  const player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  // You can add additional logic based on the player's state
  if (event.data === YT.PlayerState.ENDED) {
    console.log("Video has ended.");
  }
}
