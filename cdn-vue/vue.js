// new Vue

var localComponent = Vue.component('myComponent2', {
  template: '<div>Local component</div>',
})


Vue.component('global-component1', {
  template: '<div>globalComponent</div>',

})

Vue.component('global-component2', {
  template: '<h1>globalComponent2</h1>'
})


Vue.component('child-component',{
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
})

// var eventBus = new Vue();

// eventBus.$emit('refresh', 10);

// var eventBusTest = new Vue({
//   methods: {
//     callAnyMethod() {
//       // ...
//       console.log(`what's that? `)
//     }
//   },
  
//   created: function() {
//     var vm = this;
//     eventBus.$on('refresh', function(data) {
//       console.log(data); //10
//       vm.callAnyMethod() //vm 은 현재 인스턴스를 가리킴
//     })
//   },
//   template: `<div>Test</div>`,
// })

var app = new Vue({
  el: '#app', // select Element
  components: {
    'my-component': {
      template: `<div>A custom component!</div>`
    },
    'local-component': localComponent,
    // 'event-bus-test': eventBusTest,
  },
  //data has the information which we are going to use on view.
  data: {
   name: 'component example',
   message: 'Hello Vue! from Parentcomponent',
  },
})
