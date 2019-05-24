<template>
  <div class="profile-page">
    <div class="profile-picture">
      <img src="user.profilePicture" />
      {{ user.name }}
    </div>
  </div>
</template>

export default {
  name: 'SuperProfile',
  data() {
    return {
      user: {
        name: 'John Smith',
        profilePicture: '../data/img/ANON.jpg',
        emailAddress: 'john@smith.com',
        twitterHandle: 'johnsmith',
        instagram: 'johnsmith345',
      },
    }
  }
};