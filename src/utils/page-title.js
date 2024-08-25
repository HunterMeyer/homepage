import { metaData } from "@/data/meta.js"

const defaultPageTitle = metaData.title

export const setPageTitle = (title) => {
  const newPageTitle = [defaultPageTitle, title].join(" | ")

  document.title = newPageTitle
}
