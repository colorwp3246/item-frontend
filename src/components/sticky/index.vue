<template>
  <!--<div class="stick">-->
  <div :style="{height:height+'px',zIndex:zIndex}">
    <div :class="className" :style="{top:stickTop+'px',zIndex:zIndex,position:position,width:width,height:height+'px'}">
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
  <!--</div>-->
</template>
<script>
  export default {
    name:'Sticky',
    props:{
      stickTop:{
        type:Number,
        default:0
      },
      zIndex:{
        type:Number,
        default:1
      },
      className:{
        type:String,
        default:''
      }
    },
    data() {
      return {
        active: false,
        position: '',
        width: undefined,
        height: undefined,
        isSticky: false
      }
    },
    mounted(){
      this.height=this.$el.getBoundingClientRect().height
      console.log(this.$el.getBoundingClientRect(),'高度')
      // console.log(this.$el.getBoundingClientRect())
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleReize)
    },
    activated() {
      this.handleScroll()
    },
    destoryed(){
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleReize)
    },
    methods:{
      sticky(){
        if(this.active){
          return
        }
        this.position='fixed'
        this.active=true
        this.width=this.width+'px'
        this.isSticky=true
      },
      reset(){
        this.position=''
        this.width='auto'
        this.active=false
        this.isSticky=false
      },
      handleScroll(){
        console.log("zhixing")
        const width=this.$el.getBoundingClientRect().width
        this.width=width||'auto'
        const offsetTop=this.$el.getBoundingClientRect().top
        if(offsetTop<this.stickTop){
          this.sticky()
          return
        }
        this.handleReset()
      },
      handleReset(){
        if(!this.active){
          return
        }
        this.reset()
      },
      handleReize(){
        if(this.isSticky){
          this.width=this.$el.getBoundingClientRect().width+'px'
        }
      },
    }
  }
</script>
<style>

</style>
