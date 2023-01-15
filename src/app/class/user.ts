export class User {

    constructor (public firstName:string, public lastName:string, public profilePictureUrl:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePictureUrl = profilePictureUrl;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    get urlPicture() {
        return this.profilePictureUrl;
    }
    
}
