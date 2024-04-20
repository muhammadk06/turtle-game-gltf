AFRAME.registerComponent('game',{
    init:function(){
        number_of_turtles = 5;
        this.el.addEventListener('collide', function (e){
            number_of_turtles = number_of_turtles -1;
            e.detail.target.el.remove();
            change_num = document.getElementById("num");
            change_num.setAttribute('text', {value: String(number_of_turtles)});
        })
    }
})