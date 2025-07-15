// Add at the top or appropriate place for global variables
let gameMusic;

// Function to start music loop
function playGameMusic() {
    if (!gameMusic) {
        gameMusic = new Audio('game-music-loop-6-144641.mp3'); // Corrected path

        gameMusic.loop = true;
        gameMusic.volume = 1.0; // Volume must be between 0.0 and 1.0
    }
    gameMusic.currentTime = 0;
    gameMusic.play();
}

// Function to stop music
function stopGameMusic() {
    if (gameMusic) {
        gameMusic.pause();
        gameMusic.currentTime = 0;
    }
}

// Function to play the start sound effect
function playStartSound() {
    const startSound = new Audio('assets/game-start-6104.mp3');
    startSound.volume = 1.0;
    startSound.play();
}

// Call playStartSound() at the start of startGame()
function startGame() {
    playStartSound();
    // ...existing code...
    playGameMusic();
    // ...existing code...
}

// Call stopGameMusic() when the game ends or is paused
function endGame() {
    // ...existing code...
    stopGameMusic();
    // ...existing code...
}

// ...existing code...