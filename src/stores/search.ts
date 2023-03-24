import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export interface Item {
	id: number;
	certified: boolean;
	name: string;
	rating: number;
	desc: string;
	profileURL: string;
	location: string;
	tags: string[];
}

export const useFilterStore = defineStore("filter", {
	state: () => ({ 
	certified: useRoute().query.c || "all", 
	location: useRoute().query.l || "all", })
	,
	actions: {
		setCertified(arg: string) {
			this.certified = arg;
		},
		setLocation(arg: string) {
			this.location = arg;
		},
	},
});
export const useSearchStore = defineStore("search", {
	state: () => ({ search: useRoute().query.q || "" }),
	actions: {
		setSearch(text: string) {
			this.search = text;
		},
	},
});
