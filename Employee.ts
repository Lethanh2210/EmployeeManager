export class Employee {
    private _name: string;
    private _birth: string;
    private _address: string;
    private _role: string;

    constructor(name: string, birth: string, address: string, role: string) {
        this._name = name;
        this._birth = birth;
        this._address = address;
        this._role = role;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getBirth(): string {
        return this._birth;
    }

    setBirth(value: string) {
        this._birth = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getRole(): string {
        return this._role;
    }

    setRole(value: string) {
        this._role = value;
    }
}