import { makeObservable, observable } from "mobx";


class DisplayStore {
    _isTable: boolean;
    _isActive: boolean;
    
    constructor(_isTable: boolean) {
        this._isTable = false
        this._isActive = false

        makeObservable(this, {
            _isTable: observable,
            _isActive: observable
        })
    }

    setIsTable(table: boolean) {
        this._isTable = table
    }

    setIsActive(active: boolean) {
        this._isActive = active
    }
}

export default DisplayStore;