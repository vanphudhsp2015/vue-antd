<template>
  <div :class="$style.content">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="Email" v-bind="obForm">
        <a-input
          v-decorator="[
            'email',
            {
              validate: [
                {
                  trigger: ['change'],
                  rules: [
                    { required: true, message: 'Please input your email' }
                  ]
                },
                {
                  trigger: ['blur'],
                  rules: [
                    {
                      type: 'email',
                      message: 'Please enter the correct email format'
                    }
                  ]
                }
              ]
            }
          ]"
          placeholder="Email"
        >
          <a-icon slot="prefix" type="mail" class="input-prefix" />
        </a-input>
      </a-form-item>
      <a-form-item v-bind="obForm">
        <span slot="label">
          Password&nbsp;
          <a-tooltip title="Security passwords: ceramic letters, numbers, capital letters, special characters">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input-password
          v-decorator="[
            'password',
            {
              validate: [
                {
                  trigger: ['change'],
                  rules: [
                    { required: true, message: 'Please input your email' }
                  ]
                },
                {
                  trigger: ['blur'],
                  rules: [
                    {
                      pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*-])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
                      message: 'Passwords are not highly secure'
                    }
                  ]
                }
              ]
            }
          ]"
          placeholder="Password"
          type="password"
          autocomplete="password"
        >
          <a-icon slot="prefix" type="eye" class="input-prefix" />
        </a-input-password>
      </a-form-item>
      <a-form-item
        :label-col="formTailLayout.labelCol"
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-checkbox>
          Remember me
        </a-checkbox>
        <a herf="/" :class="$style.forgot">Forgot password</a>
        <a-button type="primary" html-type="submit" :class="$style.button">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
    <p :class="$style.norm">
      Don't have an account yet?
      <router-link to="/signup" :class="$style.link"
        >Create one now!</router-link
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
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          if(values){
            this.$router.push('/signup')
          }
        }
      });
    }
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
