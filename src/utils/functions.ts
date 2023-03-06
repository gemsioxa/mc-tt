import { noteStore, displayStore } from "../main"
export async function changeTextArea (id: number) {
    await  noteStore.setActiveIndex(id)
    displayStore.setIsActive(true)
}