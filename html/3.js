document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".reel-video");

    function checkVideos() {
        videos.forEach(video => {
            const rect = video.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    window.addEventListener("scroll", checkVideos);
    checkVideos(); // Initial check

    videos.forEach(video => {
        video.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});