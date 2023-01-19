const app = Vue.createApp({
    data() {
        return {
            liste: [],
            selectedCategories: [],
            randomWord: null,
            randomWordLetters: [],
            userLetters: [],
            hiddenLetters: [],
            timer: 60,
            gameStarted: false,
            gameOver: false,
            intervalId: null
        };
    },
    methods: {
        selectRandomWord() {
            if (this.selectedCategories.length) {
                let filteredItems = this.liste.filter(item => this.selectedCategories.includes(item.categorie))
                let randomIndex = Math.floor(Math.random() * filteredItems.length)
                this.randomWord = filteredItems[randomIndex]
                this.randomWordLetters = this.randomWord.mot.split('')
                this.userLetters.length = 0
                this.hiddenLetters.length = 0
                this.startTimer()
            } else {
                this.randomWord = null
                this.randomWordLetters.length = 0
                this.userLetters.length = 0
                this.hiddenLetters.length = 0
                this.stopTimer()
            }
        },
        checkLetter(letter) {
            if (this.randomWord.mot.includes(this.userLetters[letter])) {
                this.hiddenLetters[letter] = this.userLetters[letter]
            }
        },
        startTimer() {
            this.gameStarted = true
            this.intervalId = setInterval(() => {
                this.timer--
                if (this.timer === 0) {
                    this.stopTimer()
                    this.gameOver = true
                }
            }, 1000)
        },
        stopTimer() {
            this.gameStarted = false
            clearInterval(this.intervalId)
            this.timer = 60
        },
    },

    computed: {
         categories() {
             return Array.from(new Set(this.liste.map(item => item.categorie)))
         }

    },
    mounted() {
        fetch('mots.json')
            .then(response => response.json())
            .then(data => {
                this.liste = data
            })
    },
});

app.mount("#app");