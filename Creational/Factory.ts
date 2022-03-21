// A factory is a object that creates/manufactures different objects
// Create objects in a centralized location

// Example 1
//
// Type of employees:
//  - Developers
//  - Testers
//
// Objective:
//  - Create a clean and concise way of creating new employees and keep track of them.


class Developer {
    name: string
    type: string

    constructor(name: string) {
        this.name = name
        this.type = "Developer"
    }
}

class Tester {
    name: string
    type: string

    constructor(name: string) {
        this.name = name
        this.type = "Developer"
    }
}

class EmployeeFactory {
    createEmployee(name: string, type: number): Developer | Tester | undefined {
        switch(type) {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
        }
    }
}

const factory = new EmployeeFactory()
const employees = []

const developer1 = factory.createEmployee('Pedro Silva', 1)
const tester1 = factory.createEmployee('Simão Serra', 2)

employees.push(developer1)
employees.push(tester1)

// [
//  Developer { name: 'Pedro Silva', type: 'Developer' },
//  Tester { name: 'Simão Serra', type: 'Developer' }
// ]