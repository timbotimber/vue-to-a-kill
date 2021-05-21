import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import NotFound from "@/components/NotFound";
import { createRouter, createWebHistory } from "vue-router";
import sourceData from "../../data/data.json";

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
		beforeEnter(to, from, next) {
			const threadExists = sourceData.threads.find(
				(thread) => thread.id === to.params.id
			);

			threadExists
				? next()
				: next({
						name: "NotFound",
						params: { pathMatch: to.path.substring(1).split("/") },
						query: to.query,
						hash: to.hash,
				  });
		},
	},

	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: NotFound,
		props: false,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
