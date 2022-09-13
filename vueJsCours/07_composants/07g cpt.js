// @ts-nocheck
//-------------------------------------------------------------------
let cpt = {
  props: {
    libelle: { type: String, default: "???" },
  },
  data() {
    return {
      cpt: 0,
    };
  },
  methods: {
    incCpt() {
      this.cpt++;
      this.$emit("ajout", this.cpt);
    },
  },
  computed: {},
  created() {},
  mounted() {},
  //  template: `<button @click="incCpt">{{libelle}}: {{cpt}}</button>`,
  template: `<button @click="incCpt"><slot></slot>: {{cpt}}</button>`,
  /* template: `<button @click="incCpt">
                <slot name="animal"></slot>
                : {{cpt}}
                <slot name="objet"></slot>
             </button>`,
  */
};
//-------------------------------------------------------------------
// @ts-ignore
const app = Vue.createApp({
  components: { cpt },
  data() {
    return {
      nom: "Toto",
      animaux: ["lapin", "lion", "poisson", "oiseau"],
    };
  },
  methods: {
    saluer() {
      console.log("Bien le bonjour !");
    },
    ajoutChien(cpt) {
      console.log(`Et voici le toutou n°` + cpt);
    },
  },
  computed: {},
  created() {},
  mounted() {},
});
//-------------------------------------------------------------------
app.mount("#app");
//-------------------------------------------------------------------
