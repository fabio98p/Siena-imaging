console.log("hi");

class component {
    id
    path
    constructor() {
        //add at the component a unique id
        this.id = component.getNewId();

        //generate the html of the component
        $("#components").append(`
        <div id='component${this.id}' class='component'>
            <div id="form-container">
                <input type="text" class="text"  id="path${this.id}" placeholder="Insert here the path">
                <button onclick="sendPath(${this.id})">send path</button>
            </div>
        </div>`)
    }
    
    //return a unique id
    static getNewId() {
        if (!this.latestId) this.latestId = 0;
            return ++this.latestId;
    }

    //remove html of the component and the html related it
    destroy(){
        $(`#component${this.id}`).remove()
        componentList = componentList.filter( component => component.id != this.id) 
    }
}

let componentList = []

function newComponent(){
	if (componentList.length < 3) {
		componentList.push(new component())
    }
}
function removeComponent(){
    componentList.pop().destroy()
}

function add(){
    console.log($(".test")[0]);
    $(".test")[0].append("gino")
}
function remove(){
    console.log("b");

    $(".test")[0].append("pino") 
}
