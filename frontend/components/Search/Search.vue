<template>
  <div>
    <div class="input-component">
      <label v-if="stateTags" for="search-vacation-input">
        <span 
          v-for="(language, index) in languages"
          :key="index"
          class="tag"
          @click="pickLanguage(language)"
        >
          {{language}}
        </span>
      </label>
      <input
        id="search-vacation-input"
        ref="searchInput"
        class="search-vacation-input"
        type="text"
        placeholder="Я ищу вакансию, например"
        @input="checkInputValue"
      >
      <button class="search-button" @click="checkVacation($refs.searchInput.value)"></button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      stateTags: true
    }
  },

  computed: {
    ...mapGetters({
      vacations: 'user/vacations'
    }),

    languages: {
      get () {
        return this.vacations
          .map(vacation => vacation.language)
          .slice(0, 3)
      },

      set (value) {
        return value
      }
    }
  },

  methods: {
    checkInputValue(e) {
      if (e.target.value) {
        this.stateTags = false;
      } else {
        this.stateTags = true;
      }
    },

    pickLanguage(language) {
      this.$refs.searchInput.value = language;
      this.stateTags = false;
    },

    checkVacation(language) {
      this.$emit('show-page', language)
    }
  }
}
</script>


<style lang="scss" scoped>
.input-component {
  position: relative;
  width: 100%;
  margin: 0 auto;

  label {
    width: auto;
    position: absolute;
    top: 17px;
    left: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
      display: none;
    }

    .tag {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 23px;
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      color: #8C8C8C;
      background: #EFEFEF;
      margin-right: 8px;
      padding: 0 24px;
      cursor: pointer;
    }
  }

  .search-vacation-input {
    width: 100%;
    height: 84px;
    box-sizing: border-box;
    border: 2px solid #8C8C8C;
    border-radius: 20px;
    font-size: 20px;
    outline: none;
    background-color: white;
    background-image: url('@/static/search.svg');
    background-position: 27px 24px; 
    background-repeat: no-repeat;
    padding: 12px 78px 12px 78px;

    &::placeholder {
      color: #8C8C8C;
    }
  }

  .search-button {
    height: 60px;
    width: 60px;
    position: absolute;
    top: 12px;
    right: 24px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: white;
    background-image: url('@/static/button.svg');
    background-repeat: no-repeat;
  }
}
</style>