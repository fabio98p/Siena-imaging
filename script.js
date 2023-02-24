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

    //update the component html with the data about the slider
    setPath(path){
        this.path = path

        let component = $(`#component${this.id}`)
        component.html(`
            <input id="range${this.id}" class="range"
                onchange="changeImage(this, ${this.id})"
                type="range"
                min="0" max="3" step="1" value="0">
            <div id="slider${this.id}">
                <img src="./${this.path}/0.png" alt="">
            </div>
        `)
    }

    //update the image of the slider
    changeImageSlider(value){
        $(`#slider${this.id}`).html(`<img src="./${this.path}/${value}.png" alt="">`)
    }

}

let componentList = []

//create a new component and put inside a componentList variable
function newComponent(){
	if (componentList.length < 3) {
		componentList.push(new component())
    }
}

//remove the last component of the componentList
function removeComponent(){
    componentList.pop().destroy()
}

//find the right component and send the path of the folder with inside image
function sendPath(id){
    let path = $(`#path${id}`)[0].value
    componentList.filter(component => component.id == id)[0].setPath(path)
}

//find the right component and tell about change image
function changeImage(e, id) {
    componentList.filter( component => component.id == id)[0].changeImageSlider(e.value)
}
