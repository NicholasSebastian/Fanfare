type Elements = "Fire" | "Water" | "Earth" | "Thunder" | "Light" | "Dark"

interface Character {
    name: string,
    artPath: string,
    tier: number,
    type: Elements,
    leaderSkill: string,
    specialAttack: string,
    passive: string,
    evolvesInto: number | null
}

const characters: Character[] = [
    {
        name: "Crazy Fat Elmo",
        artPath: "",
        tier: 3,
        type: "Earth",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: 1
    },
    {
        name: "Obese Elmo",
        artPath: "",
        tier: 4,
        type: "Earth",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: 2
    },
    {
        name: "Dugong Elmo",
        artPath: "",
        tier: 5,
        type: "Earth",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: null
    },
    {
        name: "Night Brian",
        artPath: "",
        tier: 3,
        type: "Dark",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: 4
    },
    {
        name: "Party Brian",
        artPath: "",
        tier: 4,
        type: "Dark",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: 5
    },
    {
        name: "Wasted Brian",
        artPath: "",
        tier: 5,
        type: "Dark",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: null
    },
    {
        name: "Monkey Emil",
        artPath: "",
        tier: 3,
        type: "Fire",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: 7
    },
    {
        name: "Monkey Chimp Emil",
        artPath: "",
        tier: 4,
        type: "Fire",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: 8
    },
    {
        name: "Chilli Monkey Emil",
        artPath: "",
        tier: 5,
        type: "Fire",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: null
    },
    {
        name: "Mexican Elmo",
        artPath: "",
        tier: 4,
        type: "Light",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: null
    },
    {
        name: "Playboy Brian",
        artPath: "",
        tier: 4,
        type: "Light",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: null
    },
    {
        name: "Horny Oscar",
        artPath: "",
        tier: 4,
        type: "Thunder",
        leaderSkill: "",
        specialAttack: "",
        passive: "",
        evolvesInto: null
    }
]

export default characters;