<template>
    <div v-show="!isEditMode" id="display-view">
        <h1>User Profile</h1>
        <img :src="image">
        <br/>

        <span> Name: </span><b id="name"> {{name}}</b>
        <hr />

        <span> Email: </span><b id="email">{{email}} </b>
        <hr />

        <span> Interests: </span><b id="interest">{{interests}}</b>
        <hr />     

        <button @click="handleEditProfile">Edit Profile</button>
    </div>
    <div v-show="isEditMode" id="edit-view">
        <h1>User Profile</h1>
        <img :src="image">
        <br/>

        <span> Name: </span>
        <input type="text" id="f-name" v-model="name"/>
        <hr />

        <span> Email: </span>
        <input type="text" id="f-email" v-model="email"/>
        <hr />

        <span> Interests: </span>
        <input type="text" id="f-interest" v-model="interests"/>
        <hr />
        
        <button @click="handleDisplayProfile">Update Profile</button>
    </div>
</template>

<script>

import image from "./profile.jpeg"

    export default {
    name: 'App',
    data() {
        return {
            image: image,
            name: "Anna Smith",
            email: "AnnaSmith@example.com",
            interests: "DevOps/Cloud",
            isEditMode: false
        }
    },
    methods: {
        handleEditProfile() {

            this.isEditMode = true
        },
        handleDisplayProfile() {
            this.isEditMode = false

        }
    }
    }

</script>

<style>

img {
    width: 70%;
    margin-bottom: 20px;
    display: block;
    align-items: left;
}

div {
    margin: auto;
    width: 80%;
}

hr {
    width: 60%;
    margin:25px 0px;
}

button {
    width: 160px;
    font-size: 15px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 5px;
    cursor: pointer;
}



#edit-view input {
    font-size: 15px;
    padding: 15px;
}

</style>