export const LYCEES = [
    'EDHEC Business School',
    'EM Lyon Business School',
    'ESSEC Business School',
    'HEC Paris',
    'ESCP Business School',
    'Audencia Business School',
    'Grenoble École de Management',
    'NEOMA Business School',
    'Skema Business School',
    'Toulouse Business School'
] as const

export type Lycee = typeof LYCEES[number]

export interface LyceeInfo {
    name: string
    city: string
    type: string
}

const LYCEE_DATA: Record<string, LyceeInfo> = {
    'EDHEC Business School': { name: 'EDHEC Business School', city: 'Roubaix', type: 'École de commerce' },
    'EM Lyon Business School': { name: 'EM Lyon Business School', city: 'Lyon', type: 'École de commerce' },
    'ESSEC Business School': { name: 'ESSEC Business School', city: 'Cergy', type: 'École de commerce' },
    'HEC Paris': { name: 'HEC Paris', city: 'Jouy-en-Josas', type: 'École de commerce' },
    'ESCP Business School': { name: 'ESCP Business School', city: 'Paris', type: 'École de commerce' },
    'Audencia Business School': { name: 'Audencia Business School', city: 'Nantes', type: 'École de commerce' },
    'Grenoble École de Management': { name: 'Grenoble École de Management', city: 'Grenoble', type: 'École de commerce' },
    'NEOMA Business School': { name: 'NEOMA Business School', city: 'Reims', type: 'École de commerce' },
    'Skema Business School': { name: 'Skema Business School', city: 'Sophia Antipolis', type: 'École de commerce' },
    'Toulouse Business School': { name: 'Toulouse Business School', city: 'Toulouse', type: 'École de commerce' }
}

export function getLyceeByName(name: string): LyceeInfo | undefined {
    return LYCEE_DATA[name]
}