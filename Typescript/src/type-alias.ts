interface User {
    name: string;
}

interface Action {
    do(): void;
}

type UserAction = User & Action;

function createUserAction2(u: User, a: Action): User & Action {
    return { ...u, ...a };
}

type StringOrNumber = string | number;
type arr<T> = T[];
type P<T> = Promise<T>;

type User2 = {
    name: string;
}

class UserImpl implements User2 {
    name: string;
    login(): boolean {
        throw new Error("Method not implemented.");
    }
}

type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: UserImpl): UserState {
    if (user.login()) {
        return "APPROVED";
    }
    else {
        return "REJECTED";
    }
}
