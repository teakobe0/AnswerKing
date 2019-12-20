<style>
#imgDetails {
  width: 100%;
  height: 100%;
  position: relative;
}
.imgD-Con {
  width: 1300px;
  padding: 80px 0px 0px 0px;
  margin: 0 auto;
  overflow: hidden;
}
.imgD-xian {
  width: 650px;
  height: 4px;
  margin: 0 auto;
  background-color: #f7c00d;
  border-radius: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.imgD-Con img {
  width: 640px;
  z-index: 9999;
  /* position: fixed;
  top: 90px; */
  float: left;
}
.imgD-text {
  width: 640px;
  margin-top: 10px;
  /* margin-left: 650px; */
  float: right;
}
</style>

<template>
  <div id="imgDetails">
    <homeNav></homeNav>
    
    <div class="imgD-Con">
      <div class="imgD-xian"></div>
        <img src="http://47.254.29.164:8088/uploads/16001/15001/Quiz/1600115001Quiz55154.png" alt="">
        <div class="imgD-text">
          <p>10)Which of the following was NOT a crop the colonists learned to grow from the
             Indians? For 1Point Your Answer: C)wheat Correct: 1point 1)Where did the Puritans
              first settle? For 1Point Your Answer: D)Plymouth Harbor Correct: 1 point 2)The
               main cause of the American Revolution was: For 1 Point Your Answer: B)taxes 
               Correct: 1point 3)Which of the following terms best describes George Washington?
                For1Point Your Answer: D)dignified Correct: 1 point 4)Early Puritan societies
                 were governed by a type of government termed a: For 1 Point Your Answer: B)the
                 ocracy Correct: 1 point 5)George Washington&#39;s Patriot army won every battle
                  over the British. For 1Point Your Answer: False Correct: 1 point 6)Thomas Jef
                  ferson did all of the following EXCEPT: For 1 Point Your Answer: C)end slaver
                  y Correct: 1 point 7)Which of the following did not have the direct involveme
                  nt of George Washington? For 1Point Your Answer: B)Declaration of Independence
                   Correct: 1point 8)The colony first set up specifically for Catholics was: For
                   1Point Your Answer: A) Maryland Correct: 1 point 9)Relations between early co
                   lonists and Indians were always hostile. For 1 Point Your Answer:False Corre
                   ct: 1point</p>
        </div>
        
    </div>
    <div class="imgD-xian"></div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
export default {
  name: "imgDetails",
  components: {
    homeNav,
    homeFooter,
  },
  data() {
    return {
      
    };
  },
  created: function() {
    const _this = this;
    
  },
  methods: {
    //根据课程id检索
    
  }
};
</script>