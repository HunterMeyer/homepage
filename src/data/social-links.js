import { addIcons } from "oh-vue-icons"
import {
  CoLinkedinIn,
  CoGithub,
  CoStackoverflow
} from "oh-vue-icons/icons"

addIcons(CoLinkedinIn, CoGithub, CoStackoverflow)

export const socialLinksData = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/hrmeyer",
    icon_name: CoLinkedinIn.name,
  },
  {
    title: "Github",
    url: "https://github.com/huntermeyer",
    icon_name: CoGithub.name,
  },
  {
    title: "Stack Overflow",
    url: "https://stackoverflow.com/users/1953904/hunter",
    icon_name: CoStackoverflow.name,
  },
]
