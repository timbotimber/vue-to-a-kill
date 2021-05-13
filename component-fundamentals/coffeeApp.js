let planComponent = {
	template: "#plan-template",
	props: {
		name: {
			type: String,
			default: "Cod stench",
			required: true,
		},
		selectedPlan: {
			type: String,
		},
	},
	computed: {
		isSelected() {
			return this.name === this.selectedPlan;
		},
	},
	data() {
		return {
			selected: false,
		};
	},
	methods: {
		select() {
			this.$emit("select", {
				value: this.name,
				other: "hi there",
			});
			this.selected = !this.selected;
			console.log("this is the selected value", this.selected);
		},
	},
};

let planPicker = {
	template: "#plan-picker-template",
	components: {
		planItem: planComponent,
	},
	data() {
		return {
			plans: ["the Darling River", "stinks of fish", "and vomit"],
			selectedPlan: null,
		};
	},
	methods: {
		selectPlan(plan) {
			this.selectedPlan = plan.value;
			console.log("this the plan", this.selectedPlan);
		},
	},
};

new Vue({
	el: "#app",
	components: {
		planPicker: planPicker,
	},
});

// let PlanPickerItemComponent = {
// 	template: "#plan-picker-item-template",
// 	props: {
// 		name: {
// 			type: String,
// 			required: true,
// 		},
// 		selectedPlan: {
// 			type: String,
// 		},
// 	},
// 	computed: {
// 		isSelected() {
// 			return this.name === this.selectedPlan;
// 		},
// 	},
// 	methods: {
// 		select() {
// 			this.$emit("select", this.name);
// 		},
// 	},
// };

// let PlanPickerComponent = {
// 	template: "#plan-picker-template",
// 	components: {
// 		"plan-picker-item": PlanPickerItemComponent,
// 	},
// 	data() {
// 		return {
// 			plans: ["The Single", "The Curious", "The Addict"],
// 			selectedPlan: null,
// 		};
// 	},
// 	methods: {
// 		selectPlan(plan) {
// 			this.selectedPlan = plan;
// 		},
// 	},
// };

// new Vue({
// 	el: "#app",
// 	components: {
// 		"plan-picker": PlanPickerComponent,
// 	},
// });
