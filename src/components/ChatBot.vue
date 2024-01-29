
<template>
    <div>
      <div v-if="!chatInitialized">Initializing chat...</div>
      <div v-else>
        <div v-for="message in messages" :key="message.sid">
          {{ message.author }}: {{ message.body }}
        </div>
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { initializeTwilio } from '../twilioService'; 
  
  export default {
    data() {
      return {
        chatClient: null,
        channel: null,
        chatInitialized: false,
        messages: [],
        newMessage: '',
      };
    },
    methods: {
      async sendMessage() {
        await this.channel.sendMessage(this.newMessage);
        this.newMessage = '';
      },
    },
    async mounted() {
      const { chatClient, channel } = await initializeTwilio();
      this.chatClient = chatClient;
      this.channel = channel;
      this.chatInitialized = true;
  
      this.channel.on('messageAdded', (message) => {
        this.messages.push(message);
      });
    },
  };
  </script>
  