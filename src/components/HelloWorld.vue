<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- Upload button for image files -->
    <input type="file" @change="recognizeText">
    <!-- Textbox to display recognition results -->
    <textarea v-model="ocrText" placeholder="Recognition results will appear here..." rows="10"></textarea>
  </div>
</template>

<script>
import scribe from 'scribe.js-ocr';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      ocrText: '', // To hold the OCR results
    };
  },
  methods: {
    async recognizeText(event) {
      const file = event.target.files[0];
      if (file) {
        this.ocrText = await scribe.extractText([file]);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, textarea {
  margin: 20px 0;
}
textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
