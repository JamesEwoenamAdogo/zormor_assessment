<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import axios from "axios"
export default {
    data(){
        return {
            location:[]
        }

    },
    mounted(){
        axios.get("http://localhost:9000/api/v1/all-places").then((data)=>{
            this.location= data.data.places
            console.log(this.location,data)
        })

        

    },methods:{
        async handleDelete(id){
            try{
                const response = await axios.delete(`http://localhost:9000/api/v1/delete-place/${id}`)
                axios.get("http://localhost:9000/api/v1/all-places").then((data)=>{
                    this.location= data.data.places
                    console.log(this.location,data)
                })

            }catch(error){
                console.log(error)
            }
        }
        
    }
}
</script>

<template>
  
    <li >
        <table>
            <thead>
                <tr>
                    <th>Photos</th>
                    <th>posted By</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Open Hours</th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="(item, index) in location">
                    <img :src="'http://localhost:9000/images/' + item.images" alt=""/>
                    <td>{{ item.name }}</td>
                    <td>{{ item.Location}}</td>
                    <td>{{ item.Description}}</td>
                    <td>{{ item.OpenHours}} </td>
                    <td><span @click="handleDelete(item._id)">delete</span></td>
                        
                </tr>
            </tbody>
            
        </table>
   
    </li>
 
 
</template>

<style scoped>
li{
    /* position: absolute;
    top:15%; */
    display:flex;
    list-style-type: none; 
    flex-direction: column;
}
.location-list{
    display: flex;
    flex-direction: column;
}
tr{

}
th{
    padding:30px;
    font-weight: bolder;

}
td{
    padding:30px;
}
table{
    position: absolute;
    top:20%;
    left:39%;
}
tbody{
    cursor:pointer;
}
img{
    width: 69px;
}
span{
    color:red;
    cursor:pointer;
}

  

</style>
