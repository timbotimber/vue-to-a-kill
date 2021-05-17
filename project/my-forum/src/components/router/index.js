import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: PageHome,
	},
	{
		path: "/thread/:id",
		name: "Thread",
		component: PageThreadShow,
		props: true,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
