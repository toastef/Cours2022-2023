const app = Vue.createApp({});
app.component("calcul", {
  props: {
    op: String,
  },
  data() {
    return {
      calcul: undefined,
    };
  },
  template: `<span>
              {{calcul.nb1}} {{op}} {{calcul.nb2}} =
              <input type="number">
            </span>`,
  methods: {},
  created() {
    this.calcul = calculAlea(this.op);
  },
  mounted() {},
});
app.mount("#app");

function nbreAlea(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function calculAlea(op) {
  switch (op) {
    case "+":
      nb1 = nbreAlea(1, 20);
      nb2 = nbreAlea(1, 20);
      rep = nb1 + nb2;
      break;
    case "-":
      nb1 = nbreAlea(1, 20);
      nb2 = nbreAlea(1, 20);
      if (nb1 < nb2) [nb1, nb2] = [nb2, nb1];
      rep = nb1 - nb2;
      break;
    case "*":
      nb1 = nbreAlea(1, 10);
      nb2 = nbreAlea(1, 10);
      rep = nb1 * nb2;
      break;
    case "/":
      nb1 = nbreAlea(1, 10);
      nb2 = nbreAlea(1, 10);
      rep = nb1 * nb2;
      [nb1, rep] = [rep, nb1];
      break;
    default:
      nb1 = "??";
      nb2 = "??";
      rep = "??";
      break;
  }
  return { nb1: nb1, nb2: nb2, rep: rep };
}
