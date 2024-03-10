
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const tools = document.getElementsByClassName("tool");
const colors = document.getElementsByClassName("color");


let isdraw = false,
 selected = "eraser",
 color_selected = "black";



window.addEventListener("load",()=>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

})


            console.log("toolselection");
            const toolselection = (arr_tools) => {
    arr_tools.forEach(tool => {
        tool.addEventListener("click",() => {
            selected = tool.id;
        })
    });

}

const colorselection = (arr_color) => {
    console.log(selected);
        
    arr_color.forEach(color => {
        color.addEventListener("click",() => {
            console.log("colorselection");
            color_selected = color.id;
        })
    } )
}

const draw = (e) => {
    if(isdraw){
        switch(selected){
            case "marker":
            ctx.lineWidth = 3;
            ctx.strokeStyle = color_selected;
            ctx.lineTo(e.offsetX,e.offsetY);
            ctx.stroke();
            break;
            case "eraser":
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 20;
                ctx.lineTo(e.offsetX,e.offsetY);
                ctx.stroke();
                break;
            }
        }
    }
    
    canvas.addEventListener("mouseup",()=>{ isdraw = false; ctx.beginPath();})
    canvas.addEventListener("mousemove",draw);
    canvas.addEventListener("mousedown",()=>{isdraw = true;})
    toolselection(Array.from(tools));
    colorselection(Array.from(colors));
    