// new Vue

const Home = { template: '<p>home page</p>'};
const About = { template: '<p>about page</p>'};
const NotFound = { template: '<p>Page not found</p>'};

const route = {
  '/': Home,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      console.log(this.currentRoute);
      return route[this.currentRoute] || Notfound
    }
  }
})