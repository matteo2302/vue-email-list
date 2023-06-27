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
          console.log(res);
        });
        // this.emails.push(email);
      }
    },
  },
});
app.mount("#root");
