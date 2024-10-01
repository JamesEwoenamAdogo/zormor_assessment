<script>
import axios from "axios"
export default{
  data(){
    return {
     name:"",
     Description:"",
     Location:"",
     OpenHours:"",
     images:""
    }
  },
  methods:{
    handleFileChange(e){
      this.images= e.target.files[0];
      console.log(e.target.files[0].name)
    },
    async handleSubmit(){
      try{
        const locationData = new FormData()
        locationData.append("name",this.name)
        locationData.append("Description", this.Description)
        locationData.append("Location",this.Location)
        locationData.append("OpenHours",this.OpenHours)
        locationData.append("images",this.images)
        const response = await axios.post("http://localhost:9000/api/v1/add-places",locationData)
        console.log(response)


      }catch(error){
        console.log(error)
      }

    }
  }
}
</script>

<template> 
 
  <form action="" @submit="handleSubmit">
  <div class="add-location-input">
    <input required type="text" placeholder="name" v-model="name">
    <textarea required name="" id="" cols="5" placeholder="description of place" rows="5" v-model="Description"></textarea>
    <input required type="text" placeholder="location" v-model="Location">
    <label>Open Hours</label>
    <div class="sub-input">
      
    <input required type="text" placeholder="open hours" v-model="OpenHours">
      <!-- <h3>To</h3><input type="time" placeholder="open hours"> -->


    </div>
   
    <input required type="file" @change="handleFileChange" ref="fileInput">
    <button type="submit">
      Send
    </button>
    



  </div>
</form>


</template>

<style scoped>

.nav-bar{
  display: flex;
  position:absolute;
  top:1%;
  left:40%;
  color:white;
  font-size: 1.6rem;

  gap:40px;
  
  
}

.add-location-input{
  display:flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  left:40%;
  top: 30%;
}
.sub-input{
  width:400px;
  display: flex;
  gap:30px;
}

.nav-bar div{

  
}

input{
  width: 400px;
  border-radius: 5px;
  height: 30px;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  
}
</style>
