import { defineEventHandler } from 'h3'
import { LYCEE_DATA } from '../../utils/lycees'

const voies = ['Générale', 'Technologique', 'Professionnelle'] as const
const classes = ['Seconde', 'Première', 'Terminale'] as const

function pick<T>(arr: readonly T[]) { return arr[Math.floor(Math.random() * arr.length)] }

export default defineEventHandler(() => {
    const lyceeObj = pick(LYCEE_DATA)

    return {
        lycee: lyceeObj.name,
        city: lyceeObj.city,
        lyceeType: lyceeObj.type ?? 'Lycée public',
        classe: {
            value: '',
            options: classes as unknown as string[]
        },
        voie: {
            value: '',
            options: voies as unknown as string[]
        }
    }
})
