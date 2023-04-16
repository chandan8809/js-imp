const kitchen={
    name:"kitchen",
    order:"cook",
    cookFood(){
        console.log(`serving ${this.order}`)
    }
}

const bedroom={
    name:"bedroom",
    order: "maggie"
}

kitchen.cookFood.call(bedroom)

//-----------------------------------------------------------------------------------------------------------

const person1={
    name:"chandan",
    printname(home){
       console.log(`name is ${this.name} and home ${home}`)
    }
}

const person2={
    name:"sachin"
}

person1.printname.call(person2,"Ranchi")