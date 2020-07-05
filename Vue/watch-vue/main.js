Vue.component('test-comp', {
    props: ['color'],
    template: `<div>
        <div :style="styleObject"></div>
        <button @click="updateColor">change color</button>
</div>`,
    data() {
        return {
            styleObject:{
                backgroundColor:this.color,
                width:'40px',
                height:'40px'
            },
            colors:['coral','blue','green'],
            count:0
        }
    },
    methods:{
        updateColor(){
            if(this.count <= this.colors.length-1){
                this.count++;
                this.styleObject.backgroundColor =this.colors[this.count-1];
                console.log(this.count)
            } else if(this.count >= this.colors.length){
                this.count = 0;
                this.count++;
                this.styleObject.backgroundColor =this.colors[this.count-1];
                console.log(this.count)
            }
        }
    },
    watch:{
        count(newVal,oldVal){
            console.log(`color was ${this.colors[oldVal-1]} and changes to ${this.colors[newVal-1]}`);
        }
    }
});

new Vue({
    el: '#el',
    data() {
        return {
            counter: 0,
            someText: ''
        }
    },
    watch: {
        counter(newVal, oldVal) {
            console.log(`old value ${oldVal}, new value ${newVal}`)
        },
        someText: {
            handler: 'updateCounter',
            immediate: true
        }
    },
    methods: {
        updateCounter() {
            this.counter++;
            console.log('updated')
        }
    }
});
