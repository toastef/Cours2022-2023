const app = Vue.createApp({
    data() {
         return {
             codeToFind: "1984",
             numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
             code: '',
             attempts: 3,
             isCodeCorrect: false
         }
    },
    methods: {
        addNumber(number) {
            if(this.code.length < 4) {
                this.code += number;
            }
        },
        clearCode() {
            this.code = '';
        },
        checkCode() {
            if (this.code === this.codeToFind) {
                this.isCodeCorrect = true;
            } else {
                this.attempts--;
                this.code = '';
            }
        }
    },

    computed: {
        codeWithStars: function () {
            return this.code.replace(/[0-9]/g, '*');
        }
    },

    mounted() {},
});

app.mount("#app");