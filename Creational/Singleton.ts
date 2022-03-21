// Limit the number of instances of an object to at most one

// I would say it's not useful in Javascript/Typescript

// Scenario
//
// A program that manages processes.
//
// Objective:
//  - Create a process manager that manages all the processes.

class Process {
    state: any

    constructor(state: any) {
        this.state = state
    }
}

class ProcessManager {
    processes: Array<Object>
    static instance: ProcessManager

    private constructor() {
        this.processes = []
    }
    
    static getInstance(): ProcessManager {
        if (!ProcessManager.instance) {
            ProcessManager.instance = new ProcessManager()
        }

        return ProcessManager.instance
    }
}

const processManager = ProcessManager.getInstance()
const processManager2 = ProcessManager.getInstance()

console.log(processManager === processManager2) // true