<template>
  <div :class="$style.content">
    <a-form :form="form">
      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          Nickname&nbsp;
          <a-tooltip title="What do you want others to call you?">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input
          v-decorator="[
            'nickname',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            }
          ]"
          placeholder="Nickname"
        >
          <a-icon slot="prefix" type="user" class="input-prefix" />
        </a-input>
      </a-form-item>
      <a-form-item label="Email" v-bind="obForm">
        <a-input
          v-decorator="[
            'email',
            { rules: [{ required: true, message: 'Please input your email' }] }
          ]"
          placeholder="Email"
        >
          <a-icon slot="prefix" type="mail" class="input-prefix" />
        </a-input>
      </a-form-item>
      <a-form-item label="Password" v-bind="obForm">
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: 'Please input your password' }]
            }
          ]"
          placeholder="Password"
          type="password"
        >
          <a-icon slot="prefix" type="eye" class="input-prefix" />
        </a-input>
      </a-form-item>
      <a-form-item label="Confirm password" v-bind="obForm">
        <a-input
          v-decorator="[
            'confirmPassword',
            {
              rules: [{ required: true, message: 'Please input your password' }]
            }
          ]"
          placeholder="Confirm password"
          type="password"
        >
          <a-icon slot="prefix" type="eye" class="input-prefix" />
        </a-input>
      </a-form-item>
      <a-form-item
        :label-col="formTailLayout.labelCol"
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-button type="primary" :class="$style.button">
          Sign up
        </a-button>
      </a-form-item>
    </a-form>
    <p :class="$style.norm">
      Already have an account?
      <router-link to="/signin" :class="$style.link"
        >Login now!</router-link
      >
    </p>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
};
const formTailLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24, offset: 0 }
};
export default {
  name: "login",
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      obForm: {
        colon: false,
        "label-col": formItemLayout.labelCol,
        "wrapper-col": formItemLayout.wrapperCol
      },
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  components: {},
  computed: {},
  create() {}
};
</script>

<style lang="less" module>
.content {
  text-align: left;
  .forgot {
    font-size: 12px;
  }
  .button {
    display: block;
    width: 100%;
  }
  .norm {
    text-align: center;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45);
  }
}
</style>
