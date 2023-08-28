import { defineStore } from "pinia";
import { axiosInstance } from "../utils/axios";
import type Product from "@/model/product";

interface productState {
    productsResult: Product[],
    loading: boolean
}

export const useProductStore = defineStore("products", {
    state: (): productState => ({
        productsResult: [],
        loading: false
    }),
    getters: {},
    actions: {
        async getData() {
            try {
                const { data } = await axiosInstance.get("/posts");
                this.productsResult = data.splice(0, 10);
                this.productsResult.map(
                    (item) => (item.img = `https://picsum.photos/200${item.id - 1}/200${item.id - 1}`)
                )
            } catch {
                console.log("error");
            }
        },
        async getOnePost(id: string) {
            try {
                const { data } = await axiosInstance.get(`/posts/${id}`);
                this.productsResult = [data];
                this.productsResult.map(
                    (item) => (item.img = `https://picsum.photos/200${item.id - 1}/200${item.id - 1}`)
                )
            } catch (e) {
                console.log(e);
            }
        },
        productFilter(search: string): Product[] {
            console.log(search);
            const result = this.productsResult.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
            return result;

        }
    }
})