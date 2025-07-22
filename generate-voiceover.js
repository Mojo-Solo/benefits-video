// Generate ElevenLabs voiceover for the benefits demo
const fs = require('fs');
const https = require('https');

// Read API key from .env file
const envContent = fs.readFileSync('.env', 'utf8');
const API_KEY = envContent.match(/ELEVEN_LABS_API=(.+)/)[1].trim();
const VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // Sarah - Professional female voice

// Full voiceover script
const script = `Welcome to an exciting preview of your enhanced 2025 employee benefits package.

This year, we've listened to your feedback and created a comprehensive benefits program that truly supports you and your family.

With increased coverage, significant cost savings, and new wellness initiatives, we're investing in what matters most - you.

Let's review the important dates for your 2025 benefits.

Starting January first, your enhanced medical, dental, and vision coverage begins - with a fifteen percent reduction in premiums.

On March first, our new wellness program launches, along with an increased H-S-A match of up to three thousand dollars.

Remember, December thirty-first is when your coverage period ends, with automatic renewal available for your convenience.

Now, let's explore the game-changing benefits we're introducing for 2025.

You'll have access to twenty-four seven mental health support, zero-dollar telemedicine visits, and comprehensive wellness rewards worth up to twelve hundred dollars.

We've doubled our H-S-A contribution to three thousand dollars, and introduced industry-leading fertility and family planning coverage.

Visit benefits dot company dot com to start your enrollment today. Your future is our investment.`;

const data = JSON.stringify({
    text: script,
    model_id: "eleven_monolingual_v1",
    voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.0,
        use_speaker_boost: true
    }
});

const options = {
    hostname: 'api.elevenlabs.io',
    path: `/v1/text-to-speech/${VOICE_ID}`,
    method: 'POST',
    headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log('🎙️ Generating voiceover with ElevenLabs...');

const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
        const file = fs.createWriteStream('voiceover.mp3');
        res.pipe(file);
        
        file.on('finish', () => {
            file.close();
            console.log('✅ Voiceover generated successfully: voiceover.mp3');
            console.log('📝 Script length:', script.length, 'characters');
        });
    } else {
        console.error('❌ Error:', res.statusCode, res.statusMessage);
        res.on('data', (chunk) => {
            console.error(chunk.toString());
        });
    }
});

req.on('error', (error) => {
    console.error('❌ Request failed:', error);
});

req.write(data);
req.end();