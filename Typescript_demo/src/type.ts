export interface Hello {
    text: string;

}

export const user = {
    name: 'user1'
}

// default. 한가지만 export 가능함.
export default class{
    a() {

    }
}

// ERROR!
// export default function() {
// }

type d = Hello & { hi(): void }
