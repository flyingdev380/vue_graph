
const Login = { template: '<div>Login</div>' }
const Graph = { 
	name: 'Graph',
  	template: '<div></div>',
 	data() {
    	return {
	      chartData: {
	        chart: {
	          type: 'bar'
	        },
	        title: {
	          text: 'Fruit Consumption'
	        },
	        xAxis: {
	          categories: ['Apples', 'Bananas', 'Oranges']
	        },
	        yAxis: {
	          title: {
	            text: 'Fruit eaten'
	          }
	        },
	        series: [{
	          name: 'Jane',
	          data: [1, 0, 4]
	        }, {
	          name: 'John',
	          data: [5, 7, 3]
	        }]
	      }
    	}
  	},
  	mounted() {
    	$(this.$el).highcharts(this.chartData);
  	}
}

const routes = [
  { path: '/login', component: Login },
  { path: '/graph', component: Graph }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')