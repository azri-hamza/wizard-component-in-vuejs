<template>
  <div class="p-1">
    <div class="flex flex-col items-stretch">
      <div id="progress-steps " class="my-2 gap-1 flex flex-row">
        <div
          v-bind:class="{ 'progress-bar-step-fill': activeStep >= 1 }"
          class="progress-bar-step w-1/5 h-1"
        ></div>
        <div
          v-bind:class="{ 'progress-bar-step-fill': activeStep >= 2 }"
          class="progress-bar-step w-1/5 h-1"
        ></div>
        <div
          v-bind:class="{ 'progress-bar-step-fill': activeStep >= 3 }"
          class="progress-bar-step w-1/5 h-1"
        ></div>
        <div
          v-bind:class="{ 'progress-bar-step-fill': activeStep >= 4 }"
          class="progress-bar-step w-1/5 h-1"
        ></div>
        <div
          v-bind:class="{ 'progress-bar-step-fill': activeStep >= 5 }"
          class="progress-bar-step w-1/5 h-1"
        ></div>
      </div>

      <div class="steps">
        <div v-if="activeStep == 1" class="wizard-step">
          <h3 class="font-extrabold">What roles will you be hiring for?</h3>
          <p>
            Before we get started, we’d like to ask a few questions to better
            understand your business needs.
          </p>
          <div class="step-wrapper">
            <div id="position">
              <h3>What roles will you be hiring for?</h3>
              <p>
                Before we get started, we’d like to ask a few questions to
                better understand your business needs.
              </p>
              <div class="form-group">
                <input
                  class="hidden"
                  type="radio"
                  id="rolesDevelopers"
                  name="role"
                  value="Developers"
                  v-bind:checked="role === 'Developers'"
                  @change="setRole($event)"
                /><label
                  for="rolesDevelopers"
                  class="selectable"
                  v-bind:class="{ active: role === 'Developers' }"
                  ><span class="role-title"
                    >Developers<span class="role-desc"
                      >Software Engineers, Integration Developers, and
                      DevOps.</span
                    ></span
                  ></label
                >
              </div>
              <div class="form-group">
                <input
                  class="hidden"
                  type="radio"
                  id="rolesDesigners"
                  name="role"
                  value="Designers"
                  v-bind:checked="role === 'Designers'"
                  @change="setRole($event)"
                /><label
                  for="rolesDesigners"
                  class="selectable"
                  v-bind:class="{ active: role === 'Designers' }"
                  ><span class="role-title"
                    >Designers<span class="role-desc"
                      >UI/UX, Branding, and Visual Designers.</span
                    ></span
                  ></label
                >
              </div>
              <div class="form-group">
                <input
                  class="hidden"
                  type="radio"
                  id="rolesProduct Managers"
                  name="role"
                  value="Product Managers"
                  v-bind:checked="role === 'Product Managers'"
                  @change="setRole($event)"
                /><label
                  for="rolesProduct Managers"
                  class="selectable"
                  v-bind:class="{ active: role === 'Product Managers' }"
                  ><span class="role-title"
                    >Product Managers<span class="role-desc"
                      >Product Managers, Product Owners, and Business
                      Analysts.</span
                    ></span
                  ></label
                >
              </div>
              <div class="form-group">
                <input
                  class="hidden"
                  type="radio"
                  id="rolesData Experts"
                  name="role"
                  value="Data Experts"
                  v-bind:checked="role === 'Data Experts'"
                  @change="setRole($event)"
                /><label
                  for="rolesData Experts"
                  class="selectable"
                  v-bind:class="{ active: role === 'Data Experts' }"
                  ><span class="role-title"
                    >Data Experts<span class="role-desc"
                      >Data Scientists, Big Data Experts, and Data
                      Analysts.</span
                    ></span
                  ></label
                >
              </div>
              <div class="form-group">
                <input
                  class="hidden"
                  type="radio"
                  id="rolesQA"
                  name="role"
                  value="QA"
                  v-bind:checked="role === 'QA'"
                  @change="setRole($event)"
                /><label
                  for="rolesQA"
                  class="selectable"
                  v-bind:class="{ active: role === 'QA' }"
                  ><span class="role-title"
                    >QA<span class="role-desc"
                      >Manual, Automation Engineers and Test Analysts.</span
                    ></span
                  ></label
                >
              </div>
              <div class="row">
                <div class="col-md-12 col-xs-12 hire-form-navigation">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeStep == 2" class="wizard-step">
          <div class="step-wrapper">
            <div id="commitment">
              <h3>
                What level of time commitment will you require from the expert?
              </h3>
              <div class="form-group">
                <input
                  id="2"
                  type="radio"
                  name="commitment_id"
                  value="2"
                  v-bind:checked="commitment === 2"
                  @change="setCommitment($event)"
                  class="hidden"
                /><label
                  for="2"
                  class="selectable"
                  v-bind:class="{ active: commitment === '2' }"
                  ><span class="role-title"
                    >Full-time<span class="role-desc">40 hrs/week</span></span
                  ></label
                >
              </div>
              <div class="form-group">
                <input
                  id="1"
                  type="radio"
                  name="commitment_id"
                  value="1"
                  v-bind:checked="commitment === 1"
                  @change="setCommitment($event)"
                  class="hidden"
                /><label
                  for="1"
                  class="selectable"
                  v-bind:class="{ active: commitment === '1' }"
                  ><span class="role-title"
                    >Part-time<span class="role-desc">20 hrs/week</span></span
                  ></label
                >
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeStep == 3" class="wizard-step">
          <div class="step-wrapper">
            <div id="skills">
              <div class="row">
                <div class="col-md-12">
                  <h3>Which skills or expertise do you need?</h3>
                  <div class="form-group skills-wrap">
                    <label for="skills">Skills</label>
                    <div class="custom-select css-b62m3t-container">
                      <span
                        id="react-select-2-live-region"
                        class="css-7pg0cj-a11yText"
                      ></span
                      ><span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        class="css-7pg0cj-a11yText"
                      ></span>
                      <div class="css-ygpnhw-control">
                        <div class="css-19v2pmg">
                          <div
                            class="css-148kx7g-placeholder"
                            id="react-select-2-placeholder"
                          >
                            Desired areas of expertise (e.g., JavaScript, Ruby,
                            etc.)
                          </div>
                          <div class="css-14t17bl" data-value="">
                            <input
                              class=""
                              style="
                                color: inherit;
                                background: rgba(0, 0, 0, 0) none repeat scroll
                                  0px center;
                                opacity: 1;
                                width: 100%;
                                grid-area: 1 / 2;
                                font: inherit;
                                min-width: 2px;
                                border: 0px none;
                                margin: 0px;
                                outline: currentcolor none 0px;
                                padding: 0px;
                              "
                              autocapitalize="none"
                              autocomplete="off"
                              autocorrect="off"
                              id="react-select-2-input"
                              spellcheck="false"
                              tabindex="0"
                              type="text"
                              aria-autocomplete="list"
                              aria-expanded="false"
                              aria-haspopup="true"
                              aria-controls="react-select-2-listbox"
                              aria-owns="react-select-2-listbox"
                              role="combobox"
                              aria-describedby="react-select-2-placeholder"
                              value=""
                            />
                          </div>
                        </div>
                        <div class="css-1wy0on6"></div>
                      </div>
                    </div>
                  </div>
                  <div class="selected-skills">
                    <div class="custom-tags-container">
                      <ul>
                        <li
                          v-for="(skill, index) in selectedSkills"
                          v-bind:key="index"
                          class="tag-selected"
                          @click="removeSkill(skill)"
                        >
                          {{ skill }}<a class="destroy-tag-selected"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="mt-7 pt-7 clear-both">
                  <div class="form-group">
                    <label
                      ><span>Popular skills for </span><span> </span
                      ><span id="chosen-role">Developers</span></label
                    >
                    <div class="preselected-skills">
                      <ul class="custom-tags-container">
                        <li
                          v-for="(skill, index) in skills"
                          v-bind:key="index"
                          class="tag-selected"
                          @click="addSkill(skill.name, index)"
                          v-bind:class="{ selected: skill.selected }"
                        >
                          {{ skill.name }}<a class="add-tag"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeStep == 4" class="wizard-step">
          <div id="start-time">
            <h3>When are you looking to start?</h3>
            <div class="form-group">
              <input
                id="start_date_type1"
                type="radio"
                name="start_date_type"
                value="1"
                class="hidden"
                v-bind:checked="startTime === '1'"
                @change="setStartTime($event)"
              /><label
                for="start_date_type1"
                class="selectable"
                v-bind:class="{ active: startTime === '1' }"
                ><span class="role-title">Immediately</span></label
              >
            </div>
            <div class="form-group">
              <input
                id="start_date_type5"
                type="radio"
                name="start_date_type"
                value="5"
                class="hidden"
                v-bind:checked="startTime === '5'"
                @change="setStartTime($event)"
              /><label
                for="start_date_type5"
                class="selectable"
                v-bind:class="{ active: startTime === '5' }"
                ><span class="role-title">In 1 to 4 weeks</span></label
              >
            </div>
            <div class="form-group">
              <input
                id="start_date_type6"
                type="radio"
                name="start_date_type"
                value="6"
                class="hidden"
                v-bind:checked="startTime === '6'"
                @change="setStartTime($event)"
              /><label
                for="start_date_type6"
                class="selectable"
                v-bind:class="{ active: startTime === '6' }"
                ><span class="role-title">In 1 to 2 months</span></label
              >
            </div>
            <div class="form-group">
              <input
                id="start_date_type7"
                type="radio"
                name="start_date_type"
                value="7"
                class="hidden"
                v-bind:checked="startTime === '7'"
                @change="setStartTime($event)"
              /><label
                for="start_date_type7"
                class="selectable"
                v-bind:class="{ active: startTime === '7' }"
                ><span class="role-title"
                  >More than 2 months from now</span
                ></label
              >
            </div>
          </div>
        </div>
        <div v-if="activeStep == 5" class="wizard-step">
          <div id="register">
            <h3>Let's kick off your project!</h3>
            <div class="">
              <div class="md:grid grid-cols-2 sm:grid-col-1 gap-3 w-full">
                <div class="w-full py-3">
                  <label for="first_name">First Name</label
                  ><input
                    type="text"
                    class="form-input rounded shadow-sm border-slate-200 w-full"
                    placeholder="Enter your First name"
                    name="first_name"
                    value=""
                  />
                </div>

                <div class="w-full py-3">
                  <label for="last_name">Last Name</label
                  ><input
                    type="text"
                    class="form-input rounded shadow-sm border-slate-200 w-full"
                    placeholder="Enter your Last name"
                    name="last_name"
                    value=""
                  />
                </div>
              </div>
              <div class="md:grid grid-cols-2 sm:grid-col-1 gap-3 w-full">
                <div class="w-full py-3">
                  <label for="email">Company email</label
                  ><input
                    type="text"
                    class="form-input rounded shadow-sm border-slate-200 w-full"
                    placeholder="Enter your company email"
                    name="email"
                    value=""
                  />
                </div>
                <div class="w-full py-3">
                  <div class="form-group company-phone-number">
                    <div>
                      <label for="phone_number"
                        >Phone Number <span>(Optional)</span></label
                      >

                      <input
                        type="tel"
                        autocomplete="off"
                        class="
                          form-input
                          rounded
                          shadow-sm
                          border-slate-200
                          w-full
                        "
                        name=""
                        id=""
                        placeholder="20 123 456"
                        value=""
                      />
                    </div>
                    <span class="message"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-end float-right">
              <small
                >By submitting you agree to our
                <a class="privacy-link" target="_blank" href="/privacy"
                  >Privacy Policy.</a
                ></small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between my-2">
      <button
        @click="previousStep"
        class="
          m-1
          p-2
          bg-transparent
          text-gray-500 text-center text-xl
          hover:text-gray-700
          btn-nav
        "
      >
        Back
      </button>
      <button
        @click="nextSetp"
        class="
          m-1
          p-2
          bg-green-500
          text-white text-center text-xl
          hover:bg-blue-500
          btn-nav
        "
      >
        Next
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeStep: 1,
      role: null,
      commitment: null,
      startTime: null,
      skills: [
        { name: "Python", selected: false },
        { name: "Node.js", selected: false },
        { name: "JavaScript", selected: false },
        { name: "React Native", selected: false },
        { name: "VueJS", selected: false },
        { name: "ReactJS", selected: false },
        { name: "PHP", selected: false },
        { name: "Java", selected: false },
        { name: "AWS", selected: false },
        { name: "Azure", selected: false },
        { name: "Laravel", selected: false },
      ],
      selectedSkills: [],
    };
  },
  mounted() {
    console.log("Component wizard expert mounted.");
  },
  computed: {},

  methods: {
    setStartTime(e) {
      this.startTime = e.target.value;
      setTimeout(() => this.nextSetp(), 1000);
    },
    addSkill(skill, i) {
      this.selectedSkills.push(skill);
      this.skills[i].selected = true;
    },
    removeSkill(skill) {
      let selectedSkillToRemoveIndex = this.selectedSkills.findIndex(
        (s) => s === skill
      );
      this.selectedSkills.splice(selectedSkillToRemoveIndex, 1);

      let skillToReactivateIndex = this.skills.findIndex(
        (s) => s.name === skill
      );
      this.skills[skillToReactivateIndex].selected = false;
    },
    setRole(e) {
      this.role = e.target.value;
      setTimeout(() => this.nextSetp(), 1000);
    },
    setCommitment(e) {
      this.commitment = e.target.value;
      setTimeout(() => this.nextSetp(), 1000);
    },
    nextSetp() {
      this.activeStep++;
      this.activeStep > 5 ? (this.activeStep = 5) : "";
    },
    previousStep() {
      this.activeStep--;
      this.activeStep < 1 ? (this.activeStep = 1) : "";
    },
  },
};
</script>