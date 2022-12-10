<template>
    <div id="insert-component">
        <div id="insert-new" >
            <h2 class="text-md-left">New Category</h2>
            <div class="mt-2 text-left">
                <a href="#" id="img-button" class=" d-flex flex-wrap" v-on:click.stop="loadImage()">
                    <img src="/storage/images/no_image.png" alt="logo" v:on-change="test()">
                    <input type="file" class="d-none" id="load-category-image"  v-on:input="handleFileSelected">
                    <button class="btn btn-dark btn-block" >Pridať obrázok</button>
                </a>
                <small class="text-danger d-none error">Súbor musí byť png, jpg alebo jpeg</small>
            </div>
        </div>
        <button class="btn btn-success btn-block my-2" v-on:click="submit($event)">Pridať kategóriu</button>
    </div>
</template>

<script>
    export default {
        name: "InsertComponent",
        props: [ 'updateTableData' ],
        data: function () {
            return {
                category_name: "",
                category_description: "",
                category_img:"/storage/images/no_image.png",
                file:null
            }
        },
        methods: {
            test(){
              alert("test");
            },
            loadImage(){
                document.getElementById('load-category-image').click();
            },
            handleFileSelected(event) {
                const acceptedImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                let loadedFile = document.getElementById('load-category-image').files;
                if(acceptedImageTypes.includes(loadedFile[0]['type']))
                {
                    this.category_img="/storage/images/"+loadedFile.name;
                    this.file=loadedFile;
                }
                else{
                    let $errorsElements = document.getElementsByClassName('error');
                    for (let item of $errorsElements) {
                        item.classList.remove('d-none');
                    };
                    category_img="/storage/images/no_image.png";
                }
            },
        },
    }
</script>

<!-- <template>
  <div
    v-for="user in users"
    :key="user"
    class="container border border-solid border-green flex gap-4"
  >
    <h1>{{ user.name }}</h1>
    <h3>{{ user.family }}</h3>
    <h4>{{ user.email }}</h4>
  </div>

  <div class="container flex gap-5 items-center pt-8">
    <input
      class="border border-solid"
      :value="name"
      @input="name = $event.target.value"
      type="text"
      placeholder="Your name"
    />
    <input
      class="border border-solid"
      :value="number"
      @input="number = $event.target.value"
      type="text"
      placeholder="your age"
    />
    <button
      class="text-white bg-blue-700 p-3 rounded-full hover:opacity-70 duration-300"
    >
      Submit
    </button>
  </div>

  <div
    v-for="useimage in userimage"
    :key="useimage"
    class="container flex gap-5"
  >
    <h3>{{ useimage.id }}</h3>
    <img :src="useimage.url" alt="noimage" />
    <h3>{{ useimage.title }}</h3>
    <h3>{{ useimage.des }}</h3>
  </div>

  <section>
   <div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "John",
          family: "newbie",
          email: "JohnNewbie@gmail.com",
        },
        {
          name: "Mike",
          family: "newbie",
          email: "JohnNewbie@gmail.com",
        },
        {
          name: "sammi",
          family: "newbie",
          email: "JohnNewbie@gmail.com",
        },
      ],
      userimage: [
        {
          id: "1",
          url: "@/assets/image/auction_img.jpg",
          title: "1lorem lorem lorem lorem lorem lorem",
          des: "some1 text",
        },
        {
          id: "2",
          url: "@/assets/image/auction_img.jpg",
          title: "2lorem lorem lorem lorem lorem lorem",
          des: "some2 text",
        },
        {
          id: "3",
          url: "@/assets/image/auction_img.jpg",
          title: "3lorem lorem lorem lorem lorem lorem",
          des: "some3 text",
        },
      ],
      name: "",
      number: "",
    };
  },
};
</script>


 -->



<!-- <template>
  <div>
    <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      Hover me to show the message!
    </span>
    <span v-if="hover">This is a secret message.</span>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      hover: false,
    };
  }
}
</script> -->

<!-- <script setup >
  import { ref } from "vue";
 const  hover = ref(false),
 
</script> -->

<!-- 
<template>
  <div id="app">
 <input type="file" @change="onFileChange" />

  <div id="preview">
    <img v-if="url" :src="url" />
  </div>
</div>
</template>

<script>
export default {
data() {
    return {
      url: null,
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    }
  }
}
</script>

<style>
body {
  background-color: #e2e2e2;
}

#app {
  padding: 20px;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
</style> -->

<!-- 
<template>
  <div id="app" class="container">
  <div class="row">
    <div class="col-12 text-center">
      <h1 class="mb-3">Upload Image</h1>
    </div>
    <div class="col-md-5 offset-md-1">
      <form>
        <div class="form-group">
          <label for="my-file">Select Image</label>
          <input type="file" accept="image/*" @change="previewImage" class="form-control-file border-none" id="my-file">
    
          <div class="border w-[640px] h-[182px]  bg-[#F4F5F6] rounded-2xl">
            <template v-if="preview">
              <img :src="preview" class="img-fluid rounded-2xl w-[640px] h-[182px] object-cover" />
               <p class="mb-0">file name: {{ image.name }}</p>
               <p class="mb-0">size: {{ image.size/1024 }}KB</p>
            </template>
          </div>
        </div>
      </form>
    </div>
    
   
      
       <button @click="reset">Clear All</button>
   
</div>
</div>
</template>

<script>
export default {
 data: function() {
    return {
      preview: null,
      image: null,
      preview_list: [],
      image_list: []
    };
  },
  methods: {
    previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewMultiImage: function(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while(count --) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          }
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index ++;
        }
      }
    },
    reset: function() {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    }
  }
}
</script>

<style scoped > 
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>-->







