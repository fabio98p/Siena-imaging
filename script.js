console.log("hi");

class component {
    id
    path
    constructor() {
        //add at the component a unique id
        this.id = component.getNewId();

        //generate the html of the component
        $("#components").append(`${this.id}`)
    }
    
    //return a unique id
    static getNewId() {
        if (!this.latestId) this.latestId = 0;
            return ++this.latestId;
    }
}

let componentList = []

function newComponent(){
	if (componentList.length < 3) {
		componentList.push(new component())
    }
}

function add(){
    console.log($(".test")[0]);
    $(".test")[0].append("gino")
}
function remove(){
    console.log("b");

    $(".test")[0].append("pino") 
}
