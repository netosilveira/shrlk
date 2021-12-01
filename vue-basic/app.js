const Data = {
  data() {
    return {
      name: 'Vue',
      level: '',
      count: 0
    };
  },
  mounted() {
      setInterval(() => {
        levels = ['Basic','Intermediate','Advanced'];
        if(this.count > 2){ this.count = 0 }
        this.level = levels[this.count++]
      }, 1000)
  }
};

Vue.createApp(Data).mount("#app");
