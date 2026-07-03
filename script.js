function openVideo(video, title, description) {

    localStorage.setItem("videoSrc", video);
    localStorage.setItem("videoTitle", title);
    localStorage.setItem("videoDescription", description);

    window.location.href = "player.html";

}

// Автовоспроизведение превью при наведении
document.querySelectorAll(".card video").forEach(video => {

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});