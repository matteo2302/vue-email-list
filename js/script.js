const input = "https://flynn.boolean.careers/exercises/api/random/mail";
console.log("Vue ok", Vue);
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      emails: [],
    };
  },
  methods: {
    getEmails() {
      for (i = 0; i < 10; i++) {
        axios.get(input).then((res) => {
          let email = res;
          this.emails.push(email);
          console.log(email);
        });
        // this.emails.push(email);
      }
    },
  },
});
app.mount("#root");
