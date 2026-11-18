import { experienceData } from "@/data/experience.js"

const visibleExperience = experienceData.filter((item) => item.visible)

const startYear = (dates) => parseInt(dates, 10)

// The earliest start year across all roles, e.g. "2014 - 2020" -> 2014
export const careerStartYear = Math.min(...visibleExperience.map((item) => startYear(item.dates)))

export const yearsOfExperience = (now = new Date()) => now.getFullYear() - careerStartYear

// The role whose dates run to "Present", if any
export const currentRole = visibleExperience.find((item) => /present/i.test(item.dates))

export const companyCount = new Set(visibleExperience.map((item) => item.company)).size
