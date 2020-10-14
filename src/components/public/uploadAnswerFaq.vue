<style>
.uaq-con {
  background-color: #f5f7fb;
}
.uaq-title {
  width: 1300px;
  margin: 0 auto;

  overflow: hidden;
}
.uaq-t-left {
  float: left;
  width: 650px;
  height: 500px;
}
.uaq-t-l-1 {
  color: #4458b0;
  font-weight: 700;
  font-size: 35px;
  margin-top: 70px;
  font-family: "微软雅黑";
}
.uaq-t-l-2 {
  color: #4458b0;
  font-size: 42px;
}
.uaq-t-l-3 {
  color: #3d3d3d;
  font-size: 14px;
  margin-top: 30px;
  width: 584px;
}
.uaq-t-l-4 {
  color: #fff;
  font-size: 22px;
  margin-top: 30px;
  cursor: pointer;
  background-color: #3ccece;
  padding: 15px;
  display: inline-block;
  font-weight: 700;
}
.uaq-t-l-4:hover {
  background: #fbcc2b;
  color: rgb(156, 156, 156);
}
.uaq-t-right {
  float: right;
  width: 650px;
  height: 400px;
  padding-top: 20px;
}
.uaq-t-right img {
  width: 660px;
}
.uaq-middle {
  background: #344387;
}
.uaq-m-c {
  width: 1300px;
  height: 400px;
  margin: 0 auto;
  position: relative;
}
.uaq-m-c-n {
  position: absolute;
  top: -50px;
}
.uaq-m-c-n div {
  width: 420px;
  margin-right: 20px;
  text-align: center;
  float: left;
  height: 170px;
  background: #fff;
  box-shadow: -1px 2px 4px #77777759;
  cursor: pointer;
}
.uaq-m-c-n div:hover {
  background: #3ccece;
}
.uaq-m-c-n div:hover p {
  color: #fff;
}
.uaq-m-c-n div:last-of-type {
  margin-right: 0px;
}
.uaq-m-c-n div span {
  font-size: 35px;
  color: #d0d9ff;
  margin-top: 40px;
  display: inline-block;
}
.uaq-m-c-n div p {
  font-size: 28px;
  color: #262626;
}

.uaq-m-c-t {
  width: 1300px;
  height: 200px;
  position: absolute;
  top: 180px;
}
.uaq-m-c-t .uaq-m-c-t-p {
  width: 400px;
  margin-right: 20px;
  float: left;
  height: 200px;
  color: #fff;
  padding: 0 10px;
}
.uaq-m-c-t .uaq-m-c-t-3 {
  margin-right: 0px;
}
.uaq-m-c-t .uaq-m-c-t-p div {
  font-size: 22px;
  margin-bottom: 11px;
}
.uaq-m-c-t .uaq-m-c-t-p p {
  font-size: 14px;
}
.uaq-bottom {
  width: 1300px;
  height: 400px;
  margin: 0 auto;
}
.uaq-bottom .uaq-b-l {
  width: 650px;
  float: left;
}
.uaq-bottom .uaq-b-l img {
  width: 450px;
  margin-top: 50px;
  margin-left: 170px;
}
.uaq-bottom .uaq-b-r {
  width: 650px;
  float: left;
}
.uaq-bottom .uaq-b-r img {
  margin-top: 80px;
}
.uaq-bottom .uaq-b-r b {
  display: block;
  color: #344387;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.uaq-bottom .uaq-b-r p {
  width: 400px;
  font-size: 14px;
  color: #344387;
}
.active {
  background: #3ccece !important;
}
.active p {
  color: #fff !important;
}
</style>

<template>
  <div class="uploadAnswerFaq" v-show="this.$store.state.logo.uaShow == false">
    <div class="uaq-con">
      <div class="uaq-title">
        <div class="uaq-t-left">
          <p class="uaq-t-l-1">{{$t('upload.title1')}}</p>
          <p class="uaq-t-l-2">ORGANIZE,&nbsp;LEARN&nbsp;&&nbsp;SHARE</p>
          <p class="uaq-t-l-3">{{$t('upload.title2')}}</p>
          <div class="uaq-t-l-4" @click="uaShows">{{$t('upload.title3')}}</div>
        </div>
        <div class="uaq-t-right">
          <img src="../../assets/uaqTitle.png" alt />
        </div>
      </div>
      <div class="uaq-middle">
        <div class="uaq-m-c">
          <div class="uaq-m-c-n">
            <div v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">
              <span>{{item.name}}</span>
              <P>{{item.con}}</P>
            </div>
          </div>
          <div class="uaq-m-c-t" v-show="num == 0">
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">1.</span>{{$t('upload.con1-1')}}
              </div>
              <p>{{$t('upload.con1-2')}}</p>
            </div>
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">2.</span>{{$t('upload.con1-3')}}
              </div>
              <p>{{$t('upload.con1-4')}}</p>
            </div>
            <div class="uaq-m-c-t-3 uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">3.</span>{{$t('upload.con1-5')}}
              </div>
              <p>{{$t('upload.con1-6')}}</p>
            </div>
          </div>
          <div class="uaq-m-c-t" v-show="num == 1">
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">1.</span>{{$t('upload.con2-1')}}
              </div>
              <p>{{$t('upload.con2-2')}}</p>
            </div>
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">2.</span>{{$t('upload.con2-3')}}
              </div>
              <p>{{$t('upload.con2-4')}}</p>
            </div>
            <div class="uaq-m-c-t-3 uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">3.</span>{{$t('upload.con2-5')}}
              </div>
              <p>{{$t('upload.con2-6')}}</p>
            </div>
          </div>
          <div class="uaq-m-c-t" v-show="num == 2">
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">1.</span>{{$t('upload.con3-1')}}
              </div>
              <p>{{$t('upload.con3-2')}}</p>
            </div>
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">2.</span>{{$t('upload.con3-3')}}
              </div>
              <p>{{$t('upload.con3-4')}}</p>
            </div>
            <div class="uaq-m-c-t-3 uaq-m-c-t-p">
              <div>
                <span style="font-size:35px;">3.</span>{{$t('upload.con3-5')}}
              </div>
              <p>{{$t('upload.con3-6')}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="uaq-bottom">
        <div class="uaq-b-l">
          <img src="../../assets/uaqBottom.png" alt />
        </div>
        <div class="uaq-b-r">
          <img src="../../assets/uaqLogo.png" alt />
          <b>{{$t('upload.con4-1')}}</b>
          <p>{{$t('upload.con4-2')}}</p>
          <p style="margin-top:10px;">{{$t('upload.con4-3')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
export default {
  name: "uploadAnswerFaq",
  data() {
    return {
      uaq: true,
      con: this.$t("upload.con3"),
      tabs: [
        {
          name: "ORGANIZE",
          con: this.$t("upload.con1")
        },
        {
          name: "LEARN",
          con: this.$t("upload.con2")
        },
        {
          name: "SHARE",
          con: this.$t("upload.con3")
        }
      ],
      tabContents: [
        {
          name: ""
        }
      ],
      num: 0
    };
  },
  created: function() {
    const _this = this;
  },
  methods: {
    tab(index) {
      this.num = index;
    },
    uaShows() {
      const _this = this;
      this.$store.state.logo.uaShow = true;
    }
  },
  computed:{

  },
  watch:{
    '$i18n.locale'(){
      this.tabs = [{name: "ORGANIZE",con: this.$t("upload.con1")},{name: "LEARN",con: this.$t("upload.con2")},{name: "SHARE",con: this.$t("upload.con3")}]
    }
  }
};
</script>