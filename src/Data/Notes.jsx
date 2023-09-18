import { nanoid } from "nanoid";
const Notes = [
    {
        id: nanoid(),
        title:'First Note',
        text: 'This is my first note!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam eum laudantium ratione quod eos, fugit earum itaque quisquam ex id dolores maiores dignissimos sapiente impedit beatae, necessitatibus corrupti! Aut!',
        date: '15/04/2021',
        color:'#4E33FF'
    },
    
    {
        id: nanoid(),
        title:'Second Note',
        text: 'This is my second note!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsam eum laudantium ratione quod eos, fugit earum itaque quisquam ex id dolores maiores dignissimos sapiente impedit beatae, necessitatibus corrupti! Aut!',
        date: '21/04/2021',
        color:'#FFD633'

    },
    {
        id: nanoid(),
        title:'Third Note',
        text: 'This is my third note!',
        date: '28/04/2021',
        color:'#171c26'

    }
]

export default Notes;