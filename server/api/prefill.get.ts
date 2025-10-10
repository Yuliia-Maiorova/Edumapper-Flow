export default defineEventHandler(async () => {
    const lycees = [
        'EDHEC Business School',
        'EM Lyon Business School',
        'ESSEC Business School',
        'HEC Paris',
        'ESCP Business School'
    ]

    const classes = [
        'Terminale générale',
        'Terminale technologique',
        'Terminale professionnelle'
    ]

    const voies = [
        'Bac général',
        'Bac technologique STMG',
        'Bac technologique STI2D',
        'Bac professionnel'
    ]

    const cities: Record<string, string> = {
        'EDHEC Business School': 'Roubaix',
        'EM Lyon Business School': 'Lyon',
        'ESSEC Business School': 'Cergy',
        'HEC Paris': 'Jouy-en-Josas',
        'ESCP Business School': 'Paris'
    }

    const lycee = lycees[Math.floor(Math.random() * lycees.length)]

    return {
        lycee,
        city: cities[lycee],
        lyceeType: 'École de commerce',
        classe: { value: '', options: classes },
        voie: { value: '', options: voies }
    }
})