import { addIcons } from "oh-vue-icons"
import { CoLinkedinIn, CoGithub, CoStackoverflow } from "oh-vue-icons/icons"

addIcons(CoLinkedinIn, CoGithub, CoStackoverflow)

export const socialLinksData = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/hrmeyer",
    iconName: CoLinkedinIn.name,
  },
  {
    title: "Github",
    url: "https://github.com/huntermeyer",
    iconName: CoGithub.name,
  },
  {
    title: "Stack Overflow",
    url: "https://stackoverflow.com/users/1953904/hunter",
    iconName: CoStackoverflow.name,
  },
]
