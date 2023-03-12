const newEmployees = <T extends {
    firstName: string,
    lastName: string
}> (info : T) => {
    return `${this.firstName} ${this.lastName} have a lot money}`
}

const Duc = newEmployees({
    firstName : "duc",
    lastName: "nguyen",
    salary : 20000
})