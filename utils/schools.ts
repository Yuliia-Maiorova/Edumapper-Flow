export type SchoolItem = { name: string; city: string; type?: string }
export const SCHOOL_DATA: ReadonlyArray<SchoolItem> = [
    { name: 'Etienne Dolet', city: 'Paris', type: 'Lycée public' },
    { name: 'Lycée privé Charles de Foucauld', city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée polyvalent Guillaume Tirel', city: 'Paris', type: 'Lycée public' },
    { name: "Lycée polyvalent l'Initiative", city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée polyvalent privé Saint Jean de Montmartre', city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée privé Pascal', city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée du bâtiment et des travaux publics', city: 'Paris', type: 'Lycée public' },
    { name: 'Lycée polyvalent privé Saint-Nicolas', city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée privé La Rochefoucauld', city: 'Paris', type: 'Lycée privé' },
    { name: "Lycée technique privé de l'école technique supérieure du laboratoire", city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée privé Charles Péguy', city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée privé Sainte-Louise', city: 'Paris', type: 'Lycée privé' },
    { name: "Lycée privé L'Ecole alsacienne", city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée polyvalent ESAA-Ecole Boulle', city: 'Paris', type: 'Lycée public' },
    { name: 'Lycée polyvalent Paul Poiret', city: 'Paris', type: 'Lycée public' },
    { name: 'Lycée Charlemagne', city: 'Paris', type: 'Lycée public' },
    { name: 'Lycée Claude Monet', city: 'Paris', type: 'Lycée public' },
    { name: 'Lycée privé Lucien de Hirsch', city: 'Paris', type: 'Lycée privé' },
    { name: 'Lycée privé Saint-Michel de Picpus', city: 'Paris', type: 'Lycée privé' }
] as const

export const SCHOOLS = SCHOOL_DATA.map(l => l.name) as unknown as readonly string[]

export function getSchoolByName(name: string): SchoolItem | undefined {
    return SCHOOL_DATA.find(l => l.name === name)
}
