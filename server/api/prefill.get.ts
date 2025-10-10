import { defineEventHandler } from 'h3'
import { SCHOOL_DATA } from '../../utils/schools'

const tracks = ['Générale', 'Technologique', 'Professionnelle'] as const
const classes = ['Seconde', 'Première', 'Terminale'] as const

function pick<T>(arr: readonly T[]) { return arr[Math.floor(Math.random() * arr.length)] }

export default defineEventHandler(() => {
    const school = pick(SCHOOL_DATA)
    return {
        school: school.name,
        lycee: school.name,
        city: school.city,
        schoolType: school.type ?? 'Lycée public',
        lyceeType: school.type ?? 'Lycée public',
        classGroup: { value: '', options: classes as unknown as string[] },
        trackGroup: { value: '', options: tracks as unknown as string[] },
        classe: { value: '', options: classes as unknown as string[] },
        voie: { value: '', options: tracks as unknown as string[] }
    }
})
