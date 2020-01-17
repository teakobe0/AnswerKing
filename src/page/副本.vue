<style scoped>
.add-keyperson-dialog {
  position: relative;
  height: 7.2rem;
  overflow: auto;
}
.add-keyperson-dialog .demo-form-inline {
  font-size: 0.13rem;
  color: #666;
}
/*上传图片样式*/
.add-keyperson-dialog .upload-img-form {
  width: 1rem;
  height: 1.35rem;
  position: absolute;
  right: 0.2rem;
  top: 0rem;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
}
.add-keyperson-dialog .upload-img {
  width: 1rem;
  height: 1.35rem;
  overflow: hidden;
}
.add-keyperson-dialog .upload-img:hover {
  border-color: #409eff;
  color: #409eff;
}
.add-keyperson-dialog .avatar-uploader-icon {
  position: relative;
  z-index: 100;
  font-size: 0.3rem;
  color: #8c939d;
  width: 0.9rem;
  height: 1.35rem;
  line-height: 1rem;
  text-align: center;
}
.add-keyperson-dialog .upload-img:hover .avatar-uploader-icon {
  color: #409eff;
}
.add-keyperson-dialog .avatar {
  width: 100%;
  height: auto;
  display: block;
}
.add-keyperson-dialog .upload__tip {
  font-size: 0.13rem;
  text-align: center;
  position: relative;
  z-index: 10;
  top: -0.7rem;
}
</style>
<template>
  <div class="add-keyperson-dialog">
    <el-form
      :inline="true"
      ref="addKeyPersonForm"
      :model="addKeyPersonForm"
      class="demo-form-inline"
      label-width="1.4rem"
      :rules="rules"
    >
      <el-form-item label="姓名：" prop="name">
        <el-input style="width:1rem;" v-model="addKeyPersonForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别：" label-width="0.64rem" prop="sex">
        <el-select style="width:0.65rem;" v-model="addKeyPersonForm.sex" placeholder="请选择">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄：" label-width="0.64rem" prop="age">
        <el-input style="width:0.65rem;" v-model="addKeyPersonForm.age" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item prop="file" class="upload-img-form" ref="uploadElement">
        <el-upload
          class="upload-img"
          :style="{backgroundImage:'url(' + dialogImageUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"
          ref="uploadxls"
          action="aaa"
          ::limit="1"
          :show-file-list="false"
          :on-change="handlePictureCardPreview"
          :before-upload="beforeupload"
          accept="image/png, image/gif, image/jpg, image/jpeg"
        >
          <i v-show="!dialogImageUrl" class="el-icon-upload avatar-uploader-icon"></i>
          <div v-show="!dialogImageUrl" slot="tip" class="el-upload__text upload__tip">上传照片</div>
        </el-upload>
      </el-form-item>
      <!--<img :src="dialogImageUrl"/>-->
      <el-form-item label="身份证号：" prop="idCard">
        <el-input style="width:1.7rem;" v-model="addKeyPersonForm.idCard" placeholder="请输入身份证号"></el-input>
      </el-form-item>
      <el-form-item label="国籍：" label-width="0.64rem" prop="nationlity">
        <el-select style="width:1.37rem;" v-model="addKeyPersonForm.nationlity" placeholder="请选择">
          <el-option label="中国" value="中国"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车牌号：" prop="plateNumber">
        <el-input style="width:1.7rem;" v-model="addKeyPersonForm.plateNumber" placeholder="请输入车牌号"></el-input>
      </el-form-item>
      <el-form-item label="类别：" label-width="0.64rem" prop="userType">
        <!--<el-select style="width:1.37rem;" v-model="addKeyPersonForm.userType" placeholder="请选择">
      <el-option label="精神病人" value="0"></el-option>
      <el-option label="涉毒" value="1"></el-option>
        </el-select>-->
        <el-select style="width:1.37rem;" v-model="addKeyPersonForm.userType" placeholder="请选择">
          <el-option
            v-for="item in keyPersonType"
            :key="item.id"
            :label="item.dataValue"
            :value="item.dataKey"
          >{{item.dataValue}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="户籍地：" prop="registered">
        <!-- <el-select style="width:1.3rem;" v-model="addKeyPersonForm.huji" placeholder="请选择">
      <el-option label="青岛市" value="0"></el-option>
      <el-option label="北京市" value="1"></el-option>
        </el-select>-->
        <el-cascader
          style="width:1.3rem;"
          :options="options"
          placeholder="请选择"
          v-model="addKeyPersonForm.registered"
          :rules="{type: 'array'}"
          @change="handleChange"
          :separator="' '"
        ></el-cascader>
      </el-form-item>
      <el-form-item prop="registeredDetails">
        <el-input
          style="width:3.55rem;"
          v-model="addKeyPersonForm.registeredDetails"
          placeholder="请输入详细地址"
        ></el-input>
      </el-form-item>
      <el-form-item label="居住地：" prop="domicile">
        <!--<el-select style="width:1.3rem;" v-model="addKeyPersonForm.juzhu" placeholder="请选择">
      <el-option label="青岛市" value="0"></el-option>
      <el-option label="北京市" value="1"></el-option>
        </el-select>-->
        <el-cascader
          style="width:1.3rem;"
          :options="options"
          placeholder="请选择"
          :rules="{type: 'array'}"
          v-model="addKeyPersonForm.domicile"
          @change="handleChange"
          :separator="' '"
        ></el-cascader>
      </el-form-item>
      <el-form-item prop="domicileDetails">
        <el-input
          style="width:3.55rem;"
          v-model="addKeyPersonForm.domicileDetails"
          placeholder="请输入详细地址"
        ></el-input>
      </el-form-item>
      <el-form-item label="经纬度：">
        <el-input
          style="width:5rem;"
          v-model="position"
          placeholder="请选择经纬度"
          @click.native="showPosition=true"
        ></el-input>
      </el-form-item>
      <!--<el-form-item label="所属人员库：">
     <el-select style="width:4.75rem;" v-model="addKeyPersonForm.library" placeholder="请选择">
      <el-option label="全国重点人员库1" value="0"></el-option>
      <el-option label="全国重点人员库2" value="1"></el-option>
     </el-select>
      </el-form-item>-->
      <el-form-item label="问题及现实表现：" prop="problem">
        <el-input style="width:5rem;" v-model="addKeyPersonForm.problem" placeholder="请输入问题及现实表现"></el-input>
      </el-form-item>
      <el-form-item label="采取措施：" prop="measure">
        <el-input style="width:5rem;" v-model="addKeyPersonForm.measure" placeholder="请输入措施"></el-input>
      </el-form-item>
      <el-form-item label="控制人员：" prop="controller">
        <el-table :data="addKeyPersonForm.controller" stripe height="1rem" style="width: 5rem;">
          <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
          <el-table-column prop="sex" label="性别" width="60"></el-table-column>
          <el-table-column prop="birth" show-overflow-tooltip label="出生日期"></el-table-column>
          <el-table-column prop="post" show-overflow-tooltip label="职务"></el-table-column>
          <el-table-column prop="phone" show-overflow-tooltip label="联系电话"></el-table-column>
          <el-table-column label="操作" width="60">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index)" type="text" size="small">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="text" icon="el-icon-plus" @click="innerVisible = true">继续添加</el-button>
      </el-form-item>
      <el-form-item label="备注：" prop="remark">
        <el-input
          style="width:5rem;"
          type="textarea"
          rows="1"
          v-model="addKeyPersonForm.remark"
          placeholder="请输入备注"
        ></el-input>
      </el-form-item>
      <el-form-item label="最后更新时间：" v-if="addKeyPersonForm.updateTime">
        <p style="width:4.7rem;">{{addKeyPersonForm.updateTime}}</p>
      </el-form-item>
      <el-form-item style="text-align:center;display:block;">
        <el-button type="primary" @click="onSubmit" :disabled="doSubmitFlag">保存</el-button>
      </el-form-item>
    </el-form>
    <!--添加控制人员弹框------------------开始-->
    <el-dialog
      width="4.2rem"
      title="添加控制人员"
      v-if="innerVisible"
      :visible.sync="innerVisible"
      append-to-body
      :before-close="closeFun"
    >
      <personnel-control-add @add-person="addPerson" ref="addForm"></personnel-control-add>
    </el-dialog>
    <!--添加控制人员弹框------------------结束-->
    <!--选择经纬度弹框------------------开始-->
    <el-dialog
      width="5.1rem"
      title="选择经纬度"
      v-if="showPosition"
      :visible.sync="showPosition"
      append-to-body
      :before-close="closePosition"
    >
      <personnel-add-position
        ref="addPosition"
        @add-position="addPosition"
        :position-form1="positionForm"
      ></personnel-add-position>
    </el-dialog>
    <!--选择经纬度弹框------------------结束-->
  </div>
</template>
<script>
import options from "../../../static/js/country-data.js";
import PersonnelControlAdd from "./PersonnelControlAdd.vue";
import axiosMap from "./../../api/map";
import axiosControl from "./../../api/control";
import PersonnelAddPosition from "./PersonnelAddPosition.vue";
export default {
  components: {
    PersonnelAddPosition,
    PersonnelControlAdd
  },
  name: "add-keyperson-dialog",
  props: {
    dialogType: {
      type: String
    },
    keypersonList: {
      type: Object
    }
  },
  computed: {
    position: {
      // 经纬度
      // getter
      get: function() {
        let str = "";
        if (
          this.addKeyPersonForm.longitude !== "" &&
          this.addKeyPersonForm.latitude !== "" &&
          this.addKeyPersonForm.longitude !== null &&
          this.addKeyPersonForm.latitude !== null
        ) {
          str =
            this.addKeyPersonForm.longitude +
            "," +
            this.addKeyPersonForm.latitude;
        }
        return str;
      },
      // setter
      set: function(newValue) {}
    }
  },
  /* watch: {
  keypersonList: { // 深度监听，可监听到对象、数组的变化
   handler (newQuestion, oldQuestion) {
    this.addKeyPersonForm = Object.assign({}, this.keypersonList)
    this.dialogImageUrl = Object.assign({}, this.keypersonList).iconUrl
   },
   deep: true
  }
 }, */
  data() {
    var checkNumber = (rule, value, callback) => {
      let regEn = /^[1-9]\d*$/;
      if (!regEn.test(value)) {
        callback(new Error("正整数"));
      } else {
        callback();
      }
    };
    var checkIdCard = (rule, value, callback) => {
      let regEn = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!regEn.test(value)) {
        callback(new Error("请输入正确身份证"));
      } else {
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10
        // 下面分别分析出生日期和校验位
        let num = value.toUpperCase();
        let len, re;
        len = num.length;
        if (len === 15) {
          re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
          let arrSplit = num.match(re); // 检查生日日期是否正确
          let dtmBirth = new Date(
            "19" + arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]
          );
          let bGoodDay;
          bGoodDay =
            dtmBirth.getYear() === Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
            dtmBirth.getDate() === Number(arrSplit[4]);
          if (!bGoodDay) {
            callback(new Error("请输入正确身份证"));
          } else {
            // 将15位身份证转成18位 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10
            let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            let arrCh = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
            var nTemp = 0,
              i;
            num = num.substr(0, 6) + "19" + num.substr(6, num.length - 6);
            for (i = 0; i < 17; i++) {
              nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            callback();
          }
        }
        if (len === 18) {
          re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
          let arrSplit = num.match(re); // 检查生日日期是否正确
          let dtmBirth = new Date(
            arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]
          );
          let bGoodDay;
          bGoodDay =
            dtmBirth.getFullYear() === Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
            dtmBirth.getDate() === Number(arrSplit[4]);
          if (!bGoodDay) {
            callback(new Error("请输入正确身份证"));
          } else {
            // 检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10
            let valnum;
            let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            let arrCh = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
            var nTemp = 0,
              i;
            for (i = 0; i < 17; i++) {
              nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (!isNaN(num.substr(17, 1))) {
              callback();
            }
            if (valnum !== num.substr(17, 1)) {
              callback(new Error("请输入正确身份证"));
            }
          }
        }
      }
    };
    var checkPlateNum = (rule, value, callback) => {
      if (value && value !== "") {
        let regEn = /(^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$)/;
        if (!regEn.test(value)) {
          callback(new Error("请输入正确车牌号"));
        } else {
          callback();
        }
      } else {
        callback();
      }
    };
    return {
      doSubmitFlag: false,
      showPosition: false,
      doUpload: false,
      keyPersonType: [], // 重点人员类型列表
      addKeyPersonForm: Object.assign({}, this.keypersonList),
      positionForm: {
        longtitude: this.keypersonList.longitude,
        latitude: this.keypersonList.latitude
      },
      options: options, // 存放城市数据,
      innerVisible: false, // 继续添加弹框
      dialogImageUrl: Object.assign({}, this.keypersonList).iconUrl, // 图片
      formData: new FormData(),
      rules: {
        // 表单验证
        name: [{ required: true, message: "必填项", trigger: "blur" }],
        age: [
          { required: true, message: "必填项", trigger: "blur" },
          { validator: checkNumber, trigger: "blur" }
        ],
        sex: [
          { required: true, message: "必填项", trigger: ["blur", "change"] }
        ],
        nationlity: [
          { required: true, message: "必填项", trigger: ["blur", "change"] }
        ],
        userType: [
          { required: true, message: "必填项", trigger: ["blur", "change"] }
        ],
        idCard: [
          { required: true, message: "必填项", trigger: "blur" },
          { validator: checkIdCard, trigger: "blur" }
        ],
        registered: [
          {
            required: true,
            type: "array",
            message: "必填项",
            trigger: ["blur", "change"]
          }
        ],
        registeredDetails: [
          { required: true, message: "必填项", trigger: "blur" }
        ],
        domicile: [
          {
            required: true,
            type: "array",
            message: "必填项",
            trigger: ["blur", "change"]
          }
        ],
        domicileDetails: [
          { required: true, message: "必填项", trigger: "blur" }
        ],
        file: [{ required: true, message: "请上传图片" }],
        plateNumber: [{ validator: checkPlateNum, trigger: "change" }]
      }
    };
  },
  created() {
    this.getKeyPersonType();
  },
  methods: {
    handleChange(value) {},
    // 获取重点人员类型
    getKeyPersonType: function() {
      let that = this;
      let param = {
        typeCodes: "userType"
      };
      axiosMap.getKeyPersonType(param).then(res => {
        if (res.data.code === 200) {
          that.keyPersonType = res.data.rows["0"].userType;
          that.keyPersonType.forEach(function(item) {
            if (that.addKeyPersonForm.userType === item.dataValue) {
              that.addKeyPersonForm.userType = item.dataKey;
            }
          });
          // that.keyPersonType.unshift({dataValue: '全部', dataKey: ''})
        } else {
          that.$message.error({
            message: res.data.message
          });
        }
      });
    },
    // 添加控制人员
    addPerson(person) {
      this.addKeyPersonForm.controller.push(person);
    },
    // 添加经纬度
    addPosition(position) {
      this.addKeyPersonForm.longitude = position[0];
      this.addKeyPersonForm.latitude = position[1];
      this.showPosition = false;
    },
    // 删除某个控制人员
    deleteRow(index) {
      this.addKeyPersonForm.controller.splice(
        this.addKeyPersonForm.controller[index],
        1
      );
    },
    // 关闭新增控制人员
    closeFun() {
      this.$refs.addForm.$refs.controlForm.resetFields();
      this.innerVisible = false;
    },
    // 关闭经纬度
    closePosition() {
      // this.$refs.addPosition.$refs.addPosition.resetFields()
      this.showPosition = false;
    },
    // 图片预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.addKeyPersonForm.file = file.url;
      this.doUpload = true;
      this.$refs["addKeyPersonForm"].validateField("file");
    },
    // 阻止upload的自己上传，进行再操作
    beforeupload(file) {
      this.formData.append("file", file);
      return false;
    },
    // 上传重点人员信息
    onSubmit: function() {
      let that = this;
      that.formData = new FormData();
      that.rules.file = [{ required: true, message: "请上传图片" }];
      if (that.dialogType !== "add" && !this.doUpload) {
        that.rules.file = [];
        that.$refs["uploadElement"].clearValidate();
      }
      that.$refs["addKeyPersonForm"].validate(valid => {
        if (valid) {
          that.formData.append("name", that.addKeyPersonForm.name);
          if (that.addKeyPersonForm.sex === "男") {
            that.addKeyPersonForm.sex = 1;
          } else if (that.addKeyPersonForm.sex === "女") {
            that.addKeyPersonForm.sex = 2;
          }
          that.formData.append("sex", that.addKeyPersonForm.sex);
          that.formData.append("age", that.addKeyPersonForm.age);
          that.formData.append("idCard", that.addKeyPersonForm.idCard);
          that.formData.append("nationlity", that.addKeyPersonForm.nationlity);
          that.formData.append(
            "plateNumber",
            that.addKeyPersonForm.plateNumber
          );
          that.formData.append("userType", that.addKeyPersonForm.userType);
          that.formData.append("longitude", that.addKeyPersonForm.longitude);
          that.formData.append("latitude", that.addKeyPersonForm.latitude);
          that.formData.append(
            "registered",
            that.addKeyPersonForm.registered.join("-")
          );
          that.formData.append(
            "registeredDetails",
            that.addKeyPersonForm.registeredDetails
          );
          that.formData.append(
            "domicile",
            that.addKeyPersonForm.domicile.join("-")
          );
          that.formData.append(
            "domicileDetails",
            that.addKeyPersonForm.domicileDetails
          );
          that.formData.append("problem", that.addKeyPersonForm.problem);
          that.formData.append("measure", that.addKeyPersonForm.measure);
          that.formData.append(
            "controller",
            JSON.stringify(that.addKeyPersonForm.controller)
          );
          that.formData.append("remark", that.addKeyPersonForm.remark);
          if (that.dialogType === "add") {
            that.$refs.uploadxls.submit(); // 提交时触发了before-upload函数
            that.doSubmitFlag = true;
            axiosControl.saveNewKeyPerson(that.formData).then(res => {
              that.doSubmitFlag = false;
              if (res.data.code === 200) {
                that.$message({
                  type: "success",
                  message: "添加成功"
                });
                that.$refs.addKeyPersonForm.dialogImageUrl = "none";
                that.$refs.uploadxls.clearFiles();
                that.$refs.addKeyPersonForm.resetFields();
                that.fileName = "";
                that.uploadForm = new FormData();
                that.$emit("savePersonSuccess");
              } else {
                that.$message.error({
                  message: res.data.message
                });
              }
            });
            /* .catch(err => {
        that.$message.error({
         message: err
        })
       }) */
          } else {
            if (!that.doUpload) {
              that.formData.append("iconUrl", that.addKeyPersonForm.iconUrl);
            }
            // 还要传id
            that.formData.append("id", that.addKeyPersonForm.id);
            that.doSubmitFlag = true;
            axiosControl.saveEditKeyPerson(that.formData).then(res => {
              that.doSubmitFlag = false;
              if (res.data.code === 200) {
                that.$message({
                  type: "success",
                  message: "添加成功"
                });
                that.$refs.addKeyPersonForm.dialogImageUrl = "none";
                that.$refs.uploadxls.clearFiles();
                that.$refs.addKeyPersonForm.resetFields();
                that.fileName = "";
                that.uploadForm = new FormData();
                that.$emit("savePersonSuccess");
              } else {
                that.$message.error({
                  message: res.data.message
                });
              }
            });
          }
        } else {
          this.$message({
            type: "warning",
            message: "请填写正确格式"
          });
          return false;
        }
      });
    }
  }
};
</script>