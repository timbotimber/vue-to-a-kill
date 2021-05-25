import Home from "@/pages/Home";
import ThreadShow from "@/pages/ThreadShow";
import NotFound from "@/pages/NotFound";
import Forum from "@/pages/Forum";
import { createRouter, createWebHistory } from "vue-router";
import sourceData from "../../data/data.json";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/forum/:id",
		name: "Forum",
		component: Forum,
		props: true,
	},

	{
		path: "/thread/:id",
		name: "Thread",
		component: ThreadShow,
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
