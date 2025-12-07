import { useConversation } from '@elevenlabs/react';
import React, { useState, useEffect } from 'react';

function VoiceBody(props) {

    const conversation = useConversation();

    const handleTalkToUs = async () => {
        try {
            // call after explaining to the user why the microphone access is needed
            await navigator.mediaDevices.getUserMedia({ audio: true });

            const conversationId = await conversation.startSession({
                agentId: 'agent_6701kb658re3frp8q0hcz18h3p9r',
                connectionType: 'webrtc', // either "webrtc" or "websocket"
                // userId: '<your-end-user-id>', // optional field
            });
        } catch (err) {
            console.error("Failed talk to us: ", err);
        }
    }

    useEffect(() => {
    }, []);


    return (
        <div>
            <h1 onClick={() => handleTalkToUs()}>this is the Voice body!</h1>
        </div>
    );
}

export default VoiceBody;