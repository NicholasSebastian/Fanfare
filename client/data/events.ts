interface Event {
    name: string,
    staminaCost: number
}

export const specialEvents: Event[] = [
    {
        name: "Oscar's Treat",
        staminaCost: 10
    }
]

export const evolutionEvents: Event[] = [
    {
        name: "Reign of the Mad Mexican",
        staminaCost: 15
    },
    {
        name: "All-Night Senopati",
        staminaCost: 15
    }
]