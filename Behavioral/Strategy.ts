// Encapsulate a group of closely related algorithms (strategies)
// Swap strategies easily

// Scenario
//
// Calculate shipping costs for different companies

class Fedex {
    calculate(pkg: object) {
        // calc..
        return 2.45
    }
}

class UPS {
    calculate(pkg: object) {
        // calc..
        return 1.56
    }
}

class USPS {
    calculate(pkg: object) {
        // calc..
        return 4.53
    }
}

class Shipping {
    company?: Fedex | UPS | USPS;

    setStrategy(company: Fedex | UPS | USPS) {
        this.company = company
    } 

    calculate(pkg: object) {
        return this.company?.calculate(pkg)
    }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

const product = {
    from: 'x',
    to: 'y',
    weight: 0
}

const shipping = new Shipping()
let cost: number | undefined = 0

shipping.setStrategy(fedex)
cost = shipping.calculate(product)


console.log(`Fedex: ${cost}$`)

shipping.setStrategy(ups)
cost = shipping.calculate(product)


console.log(`UPS: ${cost}$`)

shipping.setStrategy(usps)
cost = shipping.calculate(product)

console.log(`USPS: ${cost}$`)