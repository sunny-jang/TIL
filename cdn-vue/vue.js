// new Vue
var app = new Vue({
  el: '#app', // select Element
  //data has the information which we are going to use on view.
  data: {
    name: 'Vue',
    value: 0,
    smile: true,
    feelsgood: 'https://sites.psu.edu/siowfa16/files/2016/10/YeDYzSR-10apkm4.png',
    feelsbad: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2nJ20jBf_gzEzpGF1zo5zk-w4GyQihYKrobpJHieuGQb7qZnoQ',
    todos: [
      {text: 'Writing the Vue.js tutorial' },
      {text: 'Learning about Webpack2' },
      {text: 'Start a side project' },
    ],
    number: 0,
  },
  methods: {
    increment: function() {
      // Use 'this' when you access the data model inside of instance.
      this.number++;
    },
    decrement: function() {
      this.number--;
    }
  }
})