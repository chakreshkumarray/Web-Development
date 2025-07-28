class StarCatcherGame {
    constructor() {
        this.gameArea = document.getElementById('game-area');
        this.basket = document.getElementById('basket');
        this.scoreElement = document.getElementById('score');
        this.startBtn = document.getElementById('start-btn');
        
        this.score = 0;
        this.gameRunning = false;
        this.basketPosition = 50; // Percentage from left
        this.stars = [];
        this.gameSpeed = 1200;
        this.backgroundStars = [];
        
        this.init();
    }
    
    init() {
        this.startBtn.addEventListener('click', () => this.toggleGame());
        this.setupControls();
        this.createBackgroundStars();
        this.updateBasketPosition();
    }
    
    setupControls() {
        // Mouse movement control
        this.gameArea.addEventListener('mousemove', (e) => {
            if (!this.gameRunning) return;
            
            const rect = this.gameArea.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const gameAreaWidth = rect.width;
            
            // Convert mouse position to percentage (with basket width consideration)
            this.basketPosition = Math.max(5, Math.min(95, (mouseX / gameAreaWidth) * 100));
            this.updateBasketPosition();
        });
        
        // Scroll wheel control
        this.gameArea.addEventListener('wheel', (e) => {
            if (!this.gameRunning) return;
            e.preventDefault();
            
            const scrollDirection = e.deltaY > 0 ? 3 : -3;
            this.basketPosition = Math.max(5, Math.min(95, this.basketPosition + scrollDirection));
            this.updateBasketPosition();
        });
        
        // Touch support for mobile
        this.gameArea.addEventListener('touchmove', (e) => {
            if (!this.gameRunning) return;
            e.preventDefault();
            
            const rect = this.gameArea.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            const gameAreaWidth = rect.width;
            
            this.basketPosition = Math.max(5, Math.min(95, (touchX / gameAreaWidth) * 100));
            this.updateBasketPosition();
        });
    }
    
    updateBasketPosition() {
        this.basket.style.left = this.basketPosition + '%';
    }
    
    createBackgroundStars() {
        // Create twinkling background stars
        for (let i = 0; i < 20; i++) {
            const bgStar = document.createElement('div');
            bgStar.className = 'background-star';
            bgStar.textContent = '✦';
            bgStar.style.left = Math.random() * 100 + '%';
            bgStar.style.top = Math.random() * 100 + '%';
            bgStar.style.animationDelay = Math.random() * 2 + 's';
            
            this.gameArea.appendChild(bgStar);
            this.backgroundStars.push(bgStar);
        }
    }
    
    toggleGame() {
        if (this.gameRunning) {
            this.stopGame();
        } else {
            this.startGame();
        }
    }
    
    startGame() {
        this.gameRunning = true;
        this.startBtn.textContent = 'Stop Game';
        this.score = 0;
        this.updateScore();
        this.clearStars();
        this.gameSpeed = 1200;
        
        this.starInterval = setInterval(() => this.dropStar(), this.gameSpeed);
        
        // Gradually increase difficulty
        this.difficultyInterval = setInterval(() => {
            if (this.gameSpeed > 400) {
                this.gameSpeed -= 100;
                clearInterval(this.starInterval);
                this.starInterval = setInterval(() => this.dropStar(), this.gameSpeed);
            }
        }, 8000);
    }
    
    stopGame() {
        this.gameRunning = false;
        this.startBtn.textContent = 'Start Game';
        clearInterval(this.starInterval);
        clearInterval(this.difficultyInterval);
        this.clearStars();
    }
    
    dropStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = '⭐';
        star.style.left = Math.random() * 90 + '%';
        
        // Random fall speed
        const fallDuration = Math.random() * 2 + 3; // 3-5 seconds
        star.style.animationDuration = fallDuration + 's';
        
        this.gameArea.appendChild(star);
        this.stars.push(star);
        
        // Remove star after animation completes
        setTimeout(() => {
            if (star.parentNode) {
                star.remove();
                this.stars = this.stars.filter(s => s !== star);
            }
        }, fallDuration * 1000);
        
        this.checkCollisions(star);
    }
    
    checkCollisions(star) {
        const checkInterval = setInterval(() => {
            if (!star.parentNode || !this.gameRunning) {
                clearInterval(checkInterval);
                return;
            }
            
            const starRect = star.getBoundingClientRect();
            const basketRect = this.basket.getBoundingClientRect();
            
            // Check collision with basket
            if (this.isColliding(starRect, basketRect)) {
                this.collectStar(star);
                clearInterval(checkInterval);
                return;
            }
        }, 50);
    }
    
    isColliding(rect1, rect2) {
        return !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom);
    }
    
    collectStar(star) {
        star.classList.add('collected-star');
        this.score++;
        this.updateScore();
        
        // Add visual feedback
        this.basket.style.transform = 'translateX(-50%) scale(1.2)';
        setTimeout(() => {
            this.basket.style.transform = 'translateX(-50%) scale(1)';
        }, 200);
        
        setTimeout(() => {
            if (star.parentNode) {
                star.remove();
                this.stars = this.stars.filter(s => s !== star);
            }
        }, 600);
    }
    
    updateScore() {
        this.scoreElement.textContent = this.score;
    }
    
    clearStars() {
        this.stars.forEach(star => {
            if (star.parentNode) {
                star.remove();
            }
        });
        this.stars = [];
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new StarCatcherGame();
});
